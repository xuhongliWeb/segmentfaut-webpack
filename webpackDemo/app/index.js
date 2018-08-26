import _ from 'lodash/join'

function component (){
    let eDiv = document.createElement('div')
    eDiv.innerHTML = _(['Hello','Webpack'],' ')
    return eDiv
}

document.body.appendChild(component())