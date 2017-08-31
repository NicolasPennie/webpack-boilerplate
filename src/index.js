// test sample module
import foo from './modules/sample';

const component = document.createElement('div');
component.innerHTML = foo();
document.body.appendChild(component);
