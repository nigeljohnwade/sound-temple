import { dirThis } from '../ConsoleUtilities';

export const InitApp = ({
    appRootSelector,
    appH1Text,
    store,
}) => {
    const _appRoot = document.querySelector(appRootSelector);
    _appRoot.classList.add('appRoot');
    const _h1Element = createDomElement('h1', null, null, appH1Text);
    _appRoot.appendChild(_h1Element);
    let _kickElements;
    store.patterns.map((pattern) => {
        _kickElements = pattern.kick.map((step, idx) => {
            const _attributes = [
                { key: 'name', value: `kick-${idx}-enabled` },
                { key: 'type', value: 'checkbox' },
            ];
            if(step.enabled) _attributes.push({key: 'checked', value: 'checked'});
            return createDomElement(
                'input',
                _attributes,
            )
        });
    });
    _kickElements.forEach((_element) => {
        _appRoot.appendChild(_element);
    })
    return {
        root: _appRoot,
        h1: _h1Element,
    };
};

export const createComponent = (componentIdentifier, attributes) =>{

};

export const createDomElement = (
    tagNameString,
    attributeKVPArray,
    classListArray,
    textContentString,
) => {
    const _element = document.createElement(tagNameString);
    if(attributeKVPArray){
        attributeKVPArray.forEach(attribute => {
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