/**
 * Created by nissimpardo on 04/12/2016.
 */

var timer, container, shouldStartTimer = true;
var lastQuickOptions;
var lastQuery = null;
var prevDateStamp;
var maxLength = 320;
var datestampColor = null;
var successfulIcon = null;
var failedIcon = null;
var wasLatestWelcomeMessage = false;
var feedbackIcons = null;
var shouldPresentGeneralDate = false;

const remoteMessageType = {
    RemoteMessageTypDefault: 0,
    RemoteMessageTypWelcomeMessage: 1,
    RemoteMessageTypFAQ: 2
}

document.addEventListener('DOMContentLoaded', function () {
    getContainer();
    location.href = 'conversational://ready';
}, false);

function getContainer() {
    if (!container) {
        var existingWrapper = document.getElementById('conversation-body');
        if (existingWrapper) {
            container = existingWrapper;
        } else {
            container = document.body;
        }
        container.className += ' conversation';
    }
    return container;
}

function setFeedbackIcons(feedback) {
    feedbackIcons = feedback;
}

function setConfig(config) {
    getContainer().style.backgroundColor = config.backgroundColor;
    if (config.background) {
        // var img = document.getElementById("bgImg");
        // img.src = "data:application/png;base64," + config.background;
        document.body.background = "data:application/png;base64," + config.background;
        datestampColor = config.dateStampColor;
    }
    if (config.maxLength > 0) {
        maxLength = config.maxLength;
    }
}

function setMaxLength(length) {
    maxLength = length;
}

function addText(text) {
    var dateStamp = text.timestamp;
    shouldPresentGeneralDate = dateStamp && dateStamp !== prevDateStamp;
    // check general date bubble requirement
    if (shouldPresentGeneralDate) {
        createBubble(text);
    }
    // isHistory acts as an indication if animation needed
    if (text.class == 'client' && text.source == 0) {
        lastQuery = text.text;
        createBubble(text);
    } else {
        if (text.config.maxLength) {
            setMaxLength(text.config.maxLength);
        }
        createBubble(text);
    }
    if (timer != null) {
        clearTimeout(timer);
    }
}

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
}

function updateRemovable() {
    var removables = document.getElementsByClassName("removable")
    for (var i = 0; i < removables.length; i++) {
        removables[i].parentNode.removeChild(removables[i]);
    }
}

// function updateAutoMessagable(text) { //TODO:: update text
//     var autoMessagables = document.getElementsByClassName("autoMessagable")
//     autoMessagables[autoMessagables.length -1] // the element to update
// }

function stripHtml(text) {
    var div = document.createElement("div");
    div.innerHTML = text;
    return div.innerText;
}


function createBubble(text) {
    // Remove latest quick options
    var quickOption = document.getElementById('quickOption');
    var feedbackUnSelected = document.getElementById('feedbackUnSelected');

    var isFAQMessage = (text.remoteMessageType == remoteMessageType.RemoteMessageTypFAQ);
    if (quickOption != null && quickOption.className != 'persistentOption') {
        if (!(isFAQMessage && wasLatestWelcomeMessage)) {
            quickOption.parentNode.removeChild(quickOption);
        }
    }
    if (feedbackUnSelected != null) {
        feedbackUnSelected.remove();
    }
    wasLatestWelcomeMessage = (text.remoteMessageType == remoteMessageType.RemoteMessageTypWelcomeMessage);

    var parentDiv = document.createElement("div");
    parentDiv.className = 'bubbleParent';

    var dateStamp = text.timestamp;
    var bubbleStamp = text.bubbleStamp;

    if (shouldPresentGeneralDate) {
        var generalDate = document.createElement('span');
        generalDate.className = 'generalBubbleTime';
        generalDate.innerHTML = dateStamp;
        generalDate.style.color = datestampColor;
        parentDiv.appendChild(generalDate);
        parentDiv.classList.add('bubbleParent-general-date');
        prevDateStamp = dateStamp;
        getContainer().appendChild(parentDiv);
        shouldPresentGeneralDate = false;
        return;
    }

    var div = document.createElement("div");
    div.className = text.class;
    if (text.config.backgroundColor) {
        div.style.backgroundColor = text.config.backgroundColor;
    }
    div.style.borderRadius = text.config.borderRadius;

    if (text.config.avatar) {
        var avatarParentDiv = document.createElement('div');
        avatarParentDiv.className = 'avatar-parent';
        avatarParentDiv.className += ' avatar-parent-' + text.config.avatarPosition.horizontal + ' avatar-parent-' + text.config.avatarPosition.vertical;
        var avatar = document.createElement('img')
        avatar.className = 'avatar';
        avatar.src = "data:application/png;base64," + text.config.avatar;
        parentDiv.className += ' bubbleParent-' + text.config.avatarPosition.horizontal + ' bubbleParent-' + text.config.avatarPosition.vertical;
        if (dateStamp && text.config.avatarPosition.vertical === 'top') {
            parentDiv.className += "-with-date";
        }
        avatarParentDiv.appendChild(avatar);
        parentDiv.appendChild(avatarParentDiv);
    } else {
        if (text.class == 'client') {
            parentDiv.className += ' bubbleParent-right';
        } else if (text.class == 'server') {
            parentDiv.className += ' bubbleParent-left';
        } else if (text.class == 'system') {
            parentDiv.className += ' bubbleParent-system';
        }
    }

    // if content is big and article is not dynamic
    var isBigArticle = text.isReadMore;
    if (isBigArticle == null) {
        var stripped = stripHtml(text.text);
        isBigArticle = text.class != 'client' && stripped.length > maxLength && text.text.indexOf('<script>') < 0;
        text.isReadMore = isBigArticle;
    }

    if (!isBigArticle) {
        div.innerHTML = text.answersCaption != null ? text.answersCaption : text.text;
        div.style.color = text.config.textColor;
        addLinkedArticleDetector(div);
        var shareButton = div.getElementsByTagName('button');
        if (shareButton != null && shareButton.length > 0) {
            shareButton = shareButton[0];
            shareButton.onclick = share(text.text, shareButton);
        }

        //shareButton.onclick = share(text.text);
        //div.innerHTML += '<br><br> <button onclick="share(\'' + text.text + '\')" type="button">Share</button>';
    }

    // check if response should be represented like a carousel
    if (text.multiAnswers && text.multiAnswers.length) {
        var gallery = document.createElement('div');
        gallery.className = 'gallery';
        isBigArticle = false;
        for (var i = 0; i < text.multiAnswers.length; i++) {
            var answer = text.multiAnswers[i],
                slide = document.createElement('div'),
                content = document.createElement('div');

            if (answer.imageUrl) {
                var image = document.createElement('img');
                image.src = answer.imageUrl;
                image.style.width = '100%';
                content.appendChild(image);
            }

            if (answer.title) {
                var title = document.createElement('strong');
                title.appendChild(document.createTextNode(answer.title));
                title.className = 'gallery__item__caption';
                content.appendChild(title);
            }

            if (answer.subtitle) {
                var subtitle = document.createElement('p');
                subtitle.appendChild(document.createTextNode(answer.subtitle));
                subtitle.className = 'gallery__item__text';
                content.appendChild(subtitle);
            }

            if (answer.persistentOptions && answer.persistentOptions.length) {
                for (var j = 0; j < answer.persistentOptions.length; j++) {
                    var option = answer.persistentOptions[j];
                    var button = document.createElement("button");
                    this.setupBasicConfig(button, text.config.carouselConfig.button);
                    button.className = 'gallery__item__action';
                    button.innerHTML = option.text;
                    button.onclick = storeOption(option, "quickOption");
                    content.appendChild(button);
                }
            }


            content.className = 'gallery__item__holder';
            slide.className = 'gallery__item';
            this.setupBasicConfig(content, text.config.carouselConfig);
            slide.appendChild(content);
            gallery.appendChild(slide);
        }
        div.innerHTML = '';
        div.appendChild(gallery);
    }

    var answerParentDiv = document.createElement('div');
    if (text.class == 'system') {
        answerParentDiv.className = 'answerParent-system';
    }
    answerParentDiv.appendChild(div);
    parentDiv.appendChild(answerParentDiv);

    var autoMessagableElement;

    if (document.getElementsByClassName("autoMessagable").length > 0) {
        autoMessagableElement = document.getElementsByClassName("autoMessagable")[0];
        if (autoMessagableElement) {
            autoMessagableElement.parentNode.insertBefore(parentDiv, autoMessagableElement);
        }
    } else {
        getContainer().appendChild(parentDiv);
    }

    scrollToBottom();
    if (isBigArticle) {
        var readMore = {
            postback: text.articleId,
            kind: 'readMore',
            content: text.text,
            title: text.statement
        };
        var temp = truncateArticleSource(text.text, maxLength - 1);
        div.innerHTML = temp;
        addLinkedArticleDetector(div);
        if (text.persistentOptions.length === 0) {
            appendPersistentOptions(readMore, div);
        }
    }

    if (text.instantFeedback != null) {
        this.appendInstantFeedback(text, div);
    }

    if (text.quickOptions != null || text.persistentOptions != null) {
        appendQuickOptions(text, div);
    }

    if (text.removable) {
        parentDiv.classList.add('removable');

        if (text.autoMessagable) {
            parentDiv.classList.add('autoMessagable');
        }
    }

    successfulIcon = "data:application/png;base64," + text.config.sentSuccessfullyIcon;
    failedIcon = "data:application/png;base64," + text.config.sentFailureIcon;

    if (bubbleStamp && text.class != 'system') {
        // add bubble date
        var bubbleTime = document.createElement('span');
        bubbleTime.className = 'bubbleTimeClient';
        bubbleTime.innerHTML = bubbleStamp;
        bubbleTime.style.color = text.config.dateStampColor;
        let dateStampFont = text.config.dateStampFont;
        if (dateStampFont) {
            bubbleTime.style.fontFamily = dateStampFont;
        }
        bubbleTime.style.fontSize = text.config.dateStampFontSize + "px";
        if (text.class == 'client') {
            var timeDiv = document.createElement('div');
            timeDiv.className = 'timeDiv';
            var status = document.createElement('img');
            status.setAttribute("id", text.id);
            status.src = "data:application/png;base64," + text.config.pendingIcon;
            if (text.status != 1) {
                status.src = text.status == 0 ? successfulIcon : failedIconn;
            }
            status.className = 'status';

            timeDiv.appendChild(bubbleTime);
            timeDiv.appendChild(status);
            answerParentDiv.appendChild(timeDiv);
        } else {
            bubbleTime.className = 'bubbleTime';
            var timeDiv = document.createElement('div');
            timeDiv.className = 'timeDiv incoming';
            timeDiv.appendChild(bubbleTime);
            answerParentDiv.appendChild(timeDiv);
        }
    }
}

function addLinkedArticleDetector(div) {
    var links = div.querySelectorAll("a[nanorepLinkId]");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        var id = link.getAttribute('nanorepLinkId');
        link.href = "nanorep://id/" + id;
    }
}

function share(text, button) {
    return function () {
        var name = button.value;
        var share = {
            kind: "share",
            text: text.replace(/<(?!\/?a(?=>|\s.*>))\/?.*?>/gm, '')
        };
        share.text = share.text.replace('Share', '');
        location.href = 'conversational://' + JSON.stringify(share);
    }
}

function addTypingIndication() {
    var parentDiv = document.createElement("div");
    parentDiv.className = 'bubbleParent bubbleParent-server';
    var avatar = document.createElement('div');
    avatar.className = 'server-avatar avatar';
    parentDiv.appendChild(avatar);
    var div = document.createElement("div");

    div.className = 'server';
    parentDiv.id = 'loading';

    var loadingImage = document.createElement('img');
    loadingImage.setAttribute('src', 'loading.gif');
    loadingImage.style.height = '10px';
    div.appendChild(loadingImage);

    parentDiv.appendChild(div);
    getContainer().appendChild(parentDiv);
    scrollToBottom();
}

function removeTypingIndication() {
    var loading = document.getElementById('loading');
    if (loading != null) {
        loading.parentNode.removeChild(loading);
    }
}

function updateStatus(element) {
    var icon = document.getElementById(element.id);
    icon.src = element.status == 0 ? successfulIcon : failedIcon;
}


function scrollToBottom() {
    var container = getContainer();
    container.scrollTop = container.scrollHeight;
}

function getFeedbackButton(className) {
    var button = document.createElement(feedbackIcons.type == 0 ? "img" : "button");
    button.className = className;
    if (feedbackIcons.type == 0) {
        button.style.height = '30px';
        button.style.width = '30px';
        button.style.marginRight = '10px';
    }
    return button;
}

let feedbackPositiveButton = "feedbackPositiveButton";
let feedbackNegativeButton = "feedbackNegativeButton";

function appendInstantFeedback(response, resultDiv) {
    if (!(response.instantFeedback
        && response.instantFeedback.enabled
        && response.instantFeedback.visibility)) {
        return;
    }

    if (resultDiv.className != 'server') {
        return;
    }

    var div = document.createElement("div");
    div.id = "feedbackUnSelected";
    div.className = 'instantFeedback';

    var kind = "instantFeedback"
    // feedback buttons creation
    var feedback = {
        kind: kind,
        text: response.userQuery,
        articleId: response.articleId,
        reason: response.reason,
        type: 0
    };

    var likeBtn = getFeedbackButton(feedbackPositiveButton);
    var dislikeBtn = getFeedbackButton(feedbackNegativeButton);

    if (feedbackIcons.type == 0) {
        likeBtn.src = feedbackIcons.positiveIcon;
        dislikeBtn.src = feedbackIcons.negativeIcon;
    } else {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = feedbackIcons.customiseText;
        paragraph.style.display = 'inline-block';
        likeBtn.innerHTML = feedbackIcons.positiveButtonText;

        dislikeBtn.innerHTML = feedbackIcons.negativeButtonText;
        div.appendChild(paragraph);
    }
    switch (response.instantFeedback.state) {
        case 0:
            div.appendChild(likeBtn);
            div.id = 'feedbackSelected';
            break;
        case 1:
            div.appendChild(dislikeBtn);
            div.id = 'feedbackSelected';
            break;
        default:
            likeBtn.onclick = storeOption(feedback, likeBtn);
            dislikeBtn.onclick = storeOption(feedback, dislikeBtn);
            div.appendChild(likeBtn);
            div.appendChild(dislikeBtn);
            break;
    }
    this.getContainer().appendChild(div);
    this.scrollToBottom();
}

function appendQuickOptions(response, resultDiv) {
    var div = document.createElement("div");
    var answers;
    var quickOptions = response.quickOptions;
    var articleId = response.articleId;
    div.id = "quickOption";
    div.className = 'quickOption';
    if (response.persistentOptions.length > 0) {
        changeToAnswersContainer(resultDiv, response);
        answers = new Array();
        for (var i = 0; i < response.persistentOptions.length; i++) {
            var persistent = response.persistentOptions[i];
            persistent["articleId"] = articleId;
            persistent["query"] = lastQuery;
            answers.push(persistent);
        }
    }
    // if (quickOptions.length == 0) {
    //     quickOptions = response.persistentOptions;
    //     div.className = "persistentOption";
    //     div.id = "persistentOption";
    //     // if (!response.isReadMore) {
    //     //     for (var i = 0; i < quickOptions.length; i++) {
    //     //         quickOptions[i].kind = 'inlineChoice';
    //     //     }
    //     // }
    // }

    var channelsContainer = null;
    for (var i = 0; i < quickOptions.length; i++) {
        var temp = quickOptions[i];
        temp['articleId'] = articleId;
        temp['query'] = lastQuery;

        switch (temp.kind) {
            case 'carousel':
                if (!quickOptions._galleryProcessed) {
                    quickOptions._galleryProcessed = true;
                    var slides = [];
                    for (var j = 0; j < quickOptions.length; j++) {
                        if (quickOptions[j].kind === 'carousel') {
                            slides.push(quickOptions[j]);
                        }
                    }
                    appendCarousel(slides, articleId, div);
                }
                break;
            case 'readMore':
                appendPersistentOptions(temp, resultDiv, articleId);
                break;
            case 'inlineChoice':
                if (resultDiv.className == 'server') {
                    changeToAnswersContainer(resultDiv, response);
                }
                if (answers == null) {
                    answers = new Array();
                }
                //appendAnswer(temp, resultDiv, articleId);
                answers.push(temp);
                break;
            case 'channel':
                if (channelsContainer == null) {
                    channelsContainer = document.createElement("div");
                    channelsContainer.className = 'channelsContainer';
                    channelsContainer.id = 'channelsContainer';
                }
                var postback = JSON.parse(temp.postback);
                var button = document.createElement("button");
                button.type = 'button';
                button.className = "channel";

                var iconVisible = !temp.text || temp.text === 'test';
                // if (!iconVisible) {
                //     button.className += ' channel-no-icon';
                //     button.appendChild(document.createTextNode(temp.text));
                // }

                button.onclick = storeOption(temp, "quickOption");
                button.style.background = response.config.quickOptions.backgroundColor;
                if (postback.icon) {
                    var icon = document.createElement("img");
                    icon.src = postback.icon;
                    icon.style.height = '30px';
                    icon.style.width = '30px';
                    icon.style.marginRight = '5px';
                    button.appendChild(icon);
                }

                if (temp.text.length) {
                    var textWrapper = document.createElement('div');
                    var textElement = document.createTextNode(temp.text);
                    textWrapper.appendChild(textElement);
                    button.appendChild(textWrapper);
                }

                channelsContainer.appendChild(button);
                break;
            case 'location':
                if (!temp.text) {
                    temp.text = 'Share Location';
                }
            case 'instantFeedback':
                var button = document.createElement("div");
                button.className = "channel channel-";
                button.innerHTML = temp.text;
                button.onclick = storeOption(temp, "instantFeedback");
                button.style.backgroundColor = response.config.quickOptions.backgroundColor;
                div.appendChild(button);
                break;
            case 'external':
            case 'clickToCall':
            case 'url':
            case 'feedback':
            case 'other':
                //if (channelsContainer == null) {
                //    channelsContainer = document.createElement("div");
                //    channelsContainer.className = 'channelsContainer';
                //}
                var button = document.createElement("div");
                button.className = "channel channel-";
                button.innerHTML = temp.text;
                button.onclick = storeOption(temp, "quickOption");
                button.style.backgroundColor = response.config.quickOptions.backgroundColor;
                div.appendChild(button);
                break;
        }
    }
    if (answers != null && answers.length > 0) {
        resultDiv.config = response.config.persistentOptions;
        appendAnswers(answers, resultDiv, articleId, response.config);
    }
    if (channelsContainer != null) {
        div.appendChild(channelsContainer);
    }
    getContainer().appendChild(div);
    scrollToBottom();
}

function appendCarousel(carouselOptions, articleId, container) {
    // do nothing if data is empty
    if (!carouselOptions || !carouselOptions.length) {
        return;
    }

    // create gallery slide
    var createSlide = function (config) {
        var slide = document.createElement('div'),
            image = document.createElement('img'),
            title = document.createElement('strong'),
            description = document.createElement('span'),
            bottomText = document.createElement('span');

        if (config.image) {
            image.className = 'nr-carousel__image';
            image.src = config.image;
        }

        if (config.text) {
            title.className = 'nr-carousel__title';
            title.appendChild(document.createTextNode(config.text));
        }

        if (config.description) {
            description.className = 'nr-carousel__description';
            description.innerHTML = config.description;
        }

        if (config.bottomText) {
            bottomText.className = 'nr-carousel__bottom-text';
            bottomText.innerHTML = config.bottomText;
        }

        // handle different layouts
        if (config.layout === 'Detailed') {
            if (config.text) slide.appendChild(title);
            var wrap = document.createElement('div');
            wrap.className = 'nr-carousel__ovh';
            if (config.image) wrap.appendChild(image);
            if (config.description) wrap.appendChild(description);
            wrap.appendChild(description);
            slide.appendChild(wrap);
            if (config.bottomText) slide.appendChild(bottomText);
        } else {
            // fallback to default layout
            if (config.image) slide.appendChild(image);
            if (config.text) slide.appendChild(title);
            if (config.description) slide.appendChild(description);
            if (config.bottomText) slide.appendChild(bottomText);
        }

        // add click handler for slide
        slide.onclick = function () {
            location.href = 'conversational://' + unescape(JSON.stringify(config));
        }

        slide.className = 'nr-carousel__slide nr-carousel__slide--layout-' + config.layout.toLowerCase();
        carousel.appendChild(slide);
    };

    // create gallery structure
    var carousel = document.createElement('div');
    carouselOptions.forEach(createSlide);
    carousel.className = 'nr-carousel';

    // show carousel as plain scrollable div
    carousel.className += ' nr-carousel--plain';
    container.appendChild(carousel);

    /*
    // append and visually hide gallery while it's loading
    carousel.style.height = 0;
    carousel.style.overflow = 'hidden';
    container.appendChild(carousel);
 
    // initialize gallery module
    if (window.jQuery && jQuery.fn && jQuery.fn.slick && window.imagesLoaded) {
        window.imagesLoaded(carousel, function(instance) {
            // resize slides by image width
            instance.images.forEach(function(item) {
                item.img.parentNode.style.width = item.img.offsetWidth + 'px';
            });
 
            // reveal gallery
            carousel.style.height = '';
 
            // initialize Slick
            jQuery(carousel).slick({
                variableWidth: true,
                centerMode: true,
                infinite: false,
                dots: true
            });
        });
    }
    */
}


function html_substr(str, count) {

    var div = document.createElement('div');
    div.innerHTML = str;
    walk(div, track);

    function track(el) {
        if (count > 0) {
            var len = el.data.length;
            count -= len;
            if (count <= 0) {
                el.data = el.substringData(0, el.data.length + count);
            }
        } else {
            el.data = '';
        }
    }

    function walk(el, fn) {
        var node = el.firstChild;
        do {
            if (node.nodeType === 3) {
                fn(node);
                //          Added this >>------------------------------------<<
            } else if (node.nodeType === 1 && node.childNodes && node.childNodes[0]) {
                walk(node, fn);
            }
        } while (node = node.nextSibling);
    }
    return div.innerHTML;
}

function appendPersistentOptions(persistentOption, div) {
    div.onclick = storeOption(persistentOption, null);
    div.innerHTML += '<br><br> Read More +';
    var gradient = document.createElement("div");
    gradient.className = '§';
    div.appendChild(gradient);
    document.location = 'conversational://readmoreFrame/' + unescape(JSON.stringify(div.getBoundingClientRect()));
}

function changeToAnswersContainer(div, response) {
    var text = div.innerHTML;
    div.className = 'answers';
    div.innerHTML = '';
    // Multiple options title container
    var bgDiv = document.createElement('div');
    bgDiv.className = 'titleContainer';
    bgDiv.style.backgroundColor = response.config.titleConfiguration.backgroundColor;
    bgDiv.style.color = response.config.titleConfiguration.textColor;


    bgDiv.style.borderTopRightRadius = response.config.titleConfiguration.cornersBorderRadius.right;
    bgDiv.style.borderTopLeftRadius = response.config.titleConfiguration.cornersBorderRadius.left;

    div.appendChild(bgDiv);
    var answerDiv = document.createElement('div');
    answerDiv.className = 'title';
    answerDiv.innerHTML = text;
    this.setupBasicConfig(div, response.config);

    if (response.isReadMore) {
        var readMore = {
            postback: response.articleId,
            kind: 'readMore',
            content: response.text,
            title: response.statement
        };
        var truncatedText = truncateArticleSource(response.text, maxLength - 1);
        answerDiv.innerHTML = truncatedText;
        addLinkedArticleDetector(answerDiv);
        appendPersistentOptions(readMore, answerDiv);
    }

    bgDiv.appendChild(answerDiv);
}

function setupBasicConfig(div, config) {
    if (config.backgroundColor) {
        div.style.background = config.backgroundColor;
    }

    if (config.textColor) {
        div.style.color = config.textColor;
    }
}

function appendAnswers(answers, div, answerId, config) {
    for (var i = 0; i < answers.length; i++) {
        var answerDiv = document.createElement('div');

        answerDiv.innerHTML = answers[i].text;
        if (i == (answers.length - 1)) {
            answerDiv.className = 'bottomAnswer';
            answerDiv.style.borderBottomRightRadius = config.persistentOptions.cornersBorderRadius.right;
            answerDiv.style.borderBottomLeftRadius = config.persistentOptions.cornersBorderRadius.left;
            div.style.borderTopRightRadius = config.titleConfiguration.cornersBorderRadius.right;
            div.style.borderTopLeftRadius = config.titleConfiguration.cornersBorderRadius.left;
        } else {
            answerDiv.className = 'answer';
        }

        this.setupBasicConfig(answerDiv, div.config)
        div.appendChild(answerDiv);
        answerDiv.onclick = storeOption(answers[i], null);
    }
    lastQuickOptions = div;
}

function appendOffer(answers, div) {
}

function storeOption(option, div) {
    return function (event) {
        if (event.target.nodeName === "A") {
            return;
        }
        if (div != null) {
            var elem = document.getElementById(div);
            if (elem != null && elem.className != 'persistentOption') {
                elem.parentNode.removeChild(elem);
            }

            if (div.className == feedbackPositiveButton) {
                div.parentElement.id = 'feedbackSelected';
                var negetiveFeedback = div.parentElement.getElementsByClassName(feedbackNegativeButton);
                if (negetiveFeedback != null) {
                    div.onclick = null;
                    negetiveFeedback[0].remove();
                }
            } else if (div.className == feedbackNegativeButton) {
                div.parentElement.id = 'feedbackSelected';
                var positiveFeedback = div.parentElement.getElementsByClassName(feedbackPositiveButton);
                if (positiveFeedback != null) {
                    div.onclick = null;
                    positiveFeedback[0].remove();
                }
            }
        }

        // var answerContainer = document.getElementsByClassName('answers');
        // if (answerContainer != null) {
        //     for (var i = 0; i < answerContainer.length; i++) {
        //         var targetNode = answerContainer[i].parentNode;
        //         targetNode.parentNode.removeChild(targetNode);
        //     }
        // }
        var params = {
            action: option.kind,
            text: option.text,
            articleId: option.articleId

        };
        switch (option.kind) {
            case 'readMore':
                params.articleId = option.postback;
                break;
            case 'channel':
                params.info = option.postback;
                break;
            case 'instantFeedback':
                if (div.className == feedbackNegativeButton) { //can be negative
                    option.type = 1;
                }

                params.type = div.className;
                params.reason = option.reason;
                break;
        }
        if (option.kind != 'location') {
            option.trackEvent = params;
        }


        location.href = 'conversational://' + unescape(JSON.stringify(option));
    }
}


function imageForType(type) {
    switch (type) {
        case "5":
            return "phone.png";
    }
    return "mail.png";
}

function onReady() {
    location.href = 'conversational://{"kind":"onReady"}';
}

function truncateArticleSource(articleHTML, maxCharactersCount) {
    // do not truncate article if it contains <script> tag or if this articleHTML is definitely small
    if (articleHTML.length < maxCharactersCount || articleHTML.indexOf('</sc' + 'ript>') > -1) {
        return null;
    }

    // answer HTML is bigger then allowed amount of characters, but we need compare TEXT and not HTML
    var helperDiv = document.createElement('div'),
        charactersCount = 0;

    // process DOM nodes recursively
    helperDiv.innerHTML = articleHTML;
    var processNode = function (node) {
        switch (node.nodeType) {
            case 1: // Element node
                var nodes = [];

                // copy nodes to array to avoid working with "live" collection of ChildNodes (Array.prototype.slice.call doesn't work in IE8)
                for (var i = 0; i < node.childNodes.length; i++) {
                    nodes.push(node.childNodes[i]);
                }

                // process nodes using copied "non-live" array
                for (var i = 0; i < nodes.length; i++) {
                    var currentNode = nodes[i];
                    if (charactersCount < maxCharactersCount) {
                        processNode(nodes[i]);
                    } else {
                        currentNode.parentNode.removeChild(currentNode);
                    }
                }
                break;
            case 3:
                if (charactersCount > maxCharactersCount) {
                    node.parentNode.removeChild(node);
                } else if (charactersCount + node.nodeValue.length > maxCharactersCount) {
                    node.nodeValue = node.nodeValue.substr(0, maxCharactersCount - charactersCount) + '...';
                    charactersCount = maxCharactersCount + 1;
                } else {
                    charactersCount += node.nodeValue.length;
                }
                break;
        }

    }
    processNode(helperDiv);

    return charactersCount < maxCharactersCount ? articleHTML : helperDiv.innerHTML;
}
