export const InitApp = ({
    appRootSelector,
    appH1Text
}) => {
    const _appRoot = document.querySelector(appRootSelector);
    _appRoot.classList.add('appRoot');
    const _h1Element = createDomElement('h1', null, null, appH1Text);
    _appRoot.appendChild(_h1Element);
    return {
        root: _appRoot,
        h1: _h1Element,
    };
};

export const createComponent = (componentIdentifier, attributes) =>{

};

export const createDomElement = (
    tagNameString,
    attributeKVP,
    classListArray,
    textContentString,
) => {
    const _element = document.createElement(tagNameString);
    if(attributeKVP){
        attributeKVP.forEach(attribute => {
            _element.setAttribute(attribute.key, attribute.value);
        });
    }
    if(classListArray){
        _element.classList.add(...classListArray);
    }
    if(textContentString) {
        _element.textContent = textContentString;
    }
    return _element;
};