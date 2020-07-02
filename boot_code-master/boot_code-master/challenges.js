
const challengesList = document.getElementById('challenges-list');

let currentView;
challengesList.addEventListener('click', (e) => {

	console.log(e);
	const element = e.target;
	if (element.tagName === 'LI') {
		hide(currentView);
		currentView = getViewAreaElement(element, '[data-try-challenge]');
		if (currentView) {
			currentView.style.display = 'block';
		}
	} else if (element.tagName === 'I') {
		if (element.classList.contains('fa-pen-square')) {
			hide(currentView);
			currentView = getViewAreaElement(element.parentElement, '[data-edit-challenge]');
			if (currentView) {
				currentView.style.display = 'block';
			}
		} else { // Trash
			let viewAreaContainer = getViewAreaElement(element.parentElement, '[data-edit-challenge]').parentElement;
			if (currentView && viewAreaContainer === currentView.parentElement) {
				hide(viewAreaContainer);
			}
			const li = element.parentElement;
			li.remove();
		}
	}
});

const solution = document.getElementById('solution');
solution.addEventListener('click', (e) => {
	console.log(e);
	const element = e.target;
	if (element.tagName === 'INPUT') {
		hide(currentView);
		currentView = getViewAreaElement(element, '[data-solution]');
		if (currentView) {
			currentView.style.display = 'block';
		}
	}
	
})

function hide(element) {
	if (element) {
		element.style.display = 'none';
	}

}

function onClickSolutionOne(){
	alert("System.out.println\(\"Hello World\"\)");
}

function onClickSolutionTwo(){
	alert("int a = 1;\nint b = 2;\nint c = 2;\nint sum = a + b + c;\nSystem.out.println\(sum\);");
}

function onClickSolutionThree(){
	alert("int a = 1;\nint b = 2;\nint c = 3;\nint sum = a + b + c;\nint mean = sum / 3.0;\nSystem.out.println\(mean\);");
}


function getViewAreaElement(targetElement, viewNameSelector) {
	const parent = targetElement.parentElement;
	const children = parent.children;
	const indexOfClickedLi = Array.from(children).indexOf(targetElement);
	const challengesViewAreaParent = document.getElementById('challenges-view-area');
	const challengesViewAreaChildren = challengesViewAreaParent.children;
	const viewArea = challengesViewAreaChildren[indexOfClickedLi];
	const tryView = viewArea.querySelector(viewNameSelector);
	return tryView;
}
