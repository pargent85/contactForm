function contactFunction() {
    setClass()
    document.getElementById('formContact').style.display = 'block';
    document.getElementById('btnWrap').style.display = 'none';
    document.getElementById('cFeedbackWrap').style.display = 'block';
    document.getElementById('cSuggestWrap').style.display = 'none';
    document.getElementById('cQuestionSelect').value = 'Please Choose';
}

function productFunction() {
    setClass()
    document.getElementById('formContact').style.display = 'block';
    document.getElementById('btnWrap').style.display = 'none';
    document.getElementById('cFeedbackWrap').style.display = 'none';
    document.getElementById('cSuggestWrap').style.display = 'block';
    document.getElementById('cQuestionSelect').value = '3';
}

function setClass() {
    document.getElementById('cNameText').classList.remove('error');
    document.getElementById('cNameText').classList.remove('success');
    document.getElementById('cEmailText').classList.remove('error');
    document.getElementById('cEmailText').classList.remove('success');
    document.getElementById('cQuestionSelect').classList.remove('error');
    document.getElementById('cQuestionSelect').classList.remove('success');
    document.getElementById('cSuggestText').classList.remove('error');
    document.getElementById('cSuggestText').classList.remove('success');
    document.getElementById('cFeedbackText').classList.remove('error');
    document.getElementById('cFeedbackText').classList.remove('success');
    document.getElementById('cNameWarning').style.display = 'none';
    document.getElementById('cNameError').style.display = 'none';
    document.getElementById('cNameCheck').style.display = 'none';
    document.getElementById('cEmailWarning').style.display = 'none';
    document.getElementById('cEmailError').style.display = 'none';
    document.getElementById('cEmailCheck').style.display = 'none';
    document.getElementById('cQuestionWarning').style.display = 'none';
    document.getElementById('cQuestionError').style.display = 'none';
    document.getElementById('cQuestionCheck').style.display = 'none';
    document.getElementById('cSuggestWarning').style.display = 'none';
    document.getElementById('cSuggestError').style.display = 'none';
    document.getElementById('cSuggestCheck').style.display = 'none';
    document.getElementById('cFeedbackWarning').style.display = 'none';
    document.getElementById('cFeedbackError').style.display = 'none';
    document.getElementById('cFeedbackCheck').style.display = 'none';
    document.getElementById('cNameText').value = '';
    document.getElementById('cEmailText').value = '';
    document.getElementById('cQuestionSelect').value = '';
    document.getElementById('cSuggestText').value = '';
    document.getElementById('cFeedbackText').value = '';
}

function backFunction() {
    setClass();
    document.getElementById('formContact').style.display = 'none';
    document.getElementById('btnWrap').style.display = 'block';
}

function keyupFunction(e, target, name) {
    if (e.keyCode === 9) {
        return;
    }
    if (target.classList.contains('error')) {
        var warning = name + 'Warning';
        var check = name + 'Check';
        var error = name + 'Error';
        if (target.value !== '') {
            if (name.toLowerCase() === 'cemail') {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(String(target.value).toLowerCase())) {
                    target.classList.remove('error');
                    target.classList.add('success');
                    document.getElementById(warning).style.display = 'none';
                    document.getElementById(check).style.display = 'block';
                    document.getElementById(error).style.display = 'none';
                } else {
                    target.classList.remove('success');
                    target.classList.add('error');
                    document.getElementById(check).style.display = 'none';
                    document.getElementById(warning).style.display = 'block';
                    document.getElementById(error).style.display = 'block';
                }
            } else {
                target.classList.remove('error');
                target.classList.add('success');
                document.getElementById(warning).style.display = 'none';
                document.getElementById(check).style.display = 'block';
                document.getElementById(error).style.display = 'none';
            }
        } else {
            target.classList.remove('success');
            target.classList.add('error');
            document.getElementById(check).style.display = 'none';
            document.getElementById(warning).style.display = 'block';
            document.getElementById(error).style.display = 'block';
        }
    }
}

function selectChange(target) {
    document.getElementById('cSuggestText').value = '';
    document.getElementById('cSuggestText').classList.remove('error');
    document.getElementById('cSuggestText').classList.remove('success');
    document.getElementById('cSuggestWarning').style.display = 'none';
    document.getElementById('cSuggestError').style.display = 'none';
    document.getElementById('cFeedbackText').value = '';
    document.getElementById('cFeedbackText').classList.remove('error');
    document.getElementById('cFeedbackText').classList.remove('success');
    document.getElementById('cFeedbackWarning').style.display = 'none';
    document.getElementById('cFeedbackError').style.display = 'none';

    if (target.classList.contains('error')) {
        if (target.value === '1' || target.value === '2' || target.value === '3') {
            target.classList.add('success')
            target.classList.remove('error')
            document.getElementById('cQuestionWarning').style.display = 'none';
            document.getElementById('cQuestionError').style.display = 'none';
            document.getElementById('cQuestionCheck').style.display = 'block';
        }
    }
    if (target.value === '1' || target.value === '2') {
        document.getElementById('cSuggestWrap').style.display = 'none';
        document.getElementById('cFeedbackWrap').style.display = 'block';
    } else if (target.value === '3') {
        document.getElementById('cSuggestWrap').style.display = 'block';
        document.getElementById('cFeedbackWrap').style.display = 'none';

    } else {
        document.getElementById('cSuggestWrap').style.display = 'none';
        document.getElementById('cFeedbackWrap').style.display = 'block';
    }
}

function validateForm(form) {
    var cName = form['cName'].value;
    var cEmail = form['cEmail'].value;
    var cQuestion = form['cQuestion'].value;
    var cSuggest = form['cSuggest'].value;
    var cFeedback = form['cFeedback'].value;
    var returnValue = true;
    if (cName === '') {
        document.getElementById('cNameText').classList.add('error')
        document.getElementById('cNameText').classList.remove('success')
        document.getElementById('cNameWarning').style.display = 'block';
        document.getElementById('cNameError').style.display = 'block';
        document.getElementById('cNameCheck').style.display = 'none';
        returnValue = false;
    } else {
        document.getElementById('cNameText').classList.add('success')
        document.getElementById('cNameText').classList.remove('error')
        document.getElementById('cNameWarning').style.display = 'none';
        document.getElementById('cNameError').style.display = 'none';
        document.getElementById('cNameCheck').style.display = 'block';
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (cEmail === '') {
        document.getElementById('cEmailText').classList.add('error');
        document.getElementById('cEmailText').classList.remove('success');
        document.getElementById('cEmailWarning').style.display = 'block';
        document.getElementById('cEmailError').style.display = 'block';
        document.getElementById('cEmailCheck').style.display = 'none';
        returnValue = false;
    } else if (!re.test(String(cEmail).toLowerCase())) {
        document.getElementById('cEmailText').classList.add('error');
        document.getElementById('cEmailText').classList.remove('success');
        document.getElementById('cEmailWarning').style.display = 'block';
        document.getElementById('cEmailError').style.display = 'block';
        document.getElementById('cEmailCheck').style.display = 'none';
        returnValue = false;
    } else {
        document.getElementById('cEmailText').classList.add('success');
        document.getElementById('cEmailText').classList.remove('error');
        document.getElementById('cEmailWarning').style.display = 'none';
        document.getElementById('cEmailError').style.display = 'none';
        document.getElementById('cEmailCheck').style.display = 'block';

    }
    if (cQuestion === '' || cQuestion.toLowerCase() === 'please choose' || (cQuestion !== '1' && cQuestion !== '2' && cQuestion !== '3')) {
        document.getElementById('cQuestionSelect').classList.add('error')
        document.getElementById('cQuestionSelect').classList.remove('success')
        document.getElementById('cQuestionWarning').style.display = 'block';
        document.getElementById('cQuestionError').style.display = 'block';
        document.getElementById('cQuestionCheck').style.display = 'none';
        returnValue = false;
    } else {
        document.getElementById('cQuestionSelect').classList.add('success')
        document.getElementById('cQuestionSelect').classList.remove('error')
        document.getElementById('cQuestionWarning').style.display = 'none';
        document.getElementById('cQuestionError').style.display = 'none';
        document.getElementById('cQuestionCheck').style.display = 'block';
    }
    if (cQuestion === '3') {
        if (cSuggest === '') {
            document.getElementById('cSuggestText').classList.add('error')
            document.getElementById('cSuggestText').classList.remove('success')
            document.getElementById('cSuggestWarning').style.display = 'block';
            document.getElementById('cSuggestError').style.display = 'block';
            document.getElementById('cSuggestCheck').style.display = 'none';
            returnValue = false;
        } else {
            document.getElementById('cSuggestText').classList.add('success')
            document.getElementById('cSuggestText').classList.remove('error')
            document.getElementById('cSuggestWarning').style.display = 'none';
            document.getElementById('cSuggestError').style.display = 'none';
            document.getElementById('cSuggestCheck').style.display = 'block';
        }
    } else {
        if (cFeedback === '') {
            document.getElementById('cFeedbackText').classList.add('error')
            document.getElementById('cFeedbackText').classList.remove('success')
            document.getElementById('cFeedbackWarning').style.display = 'block';
            document.getElementById('cFeedbackError').style.display = 'block';
            document.getElementById('cFeedbackCheck').style.display = 'none';
            returnValue = false;
        } else {
            document.getElementById('cFeedbackText').classList.add('success')
            document.getElementById('cFeedbackText').classList.remove('error')
            document.getElementById('cFeedbackWarning').style.display = 'none';
            document.getElementById('cFeedbackError').style.display = 'none';
            document.getElementById('cFeedbackCheck').style.display = 'block';
        }
    }
    return returnValue;
}