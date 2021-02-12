import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import $ from "jquery";
import axios from 'axios';

/*
 * Test that uses modern JavaScript and will be compiled to work in IE 11
 */
// import greeting from './Greeting'
//
// window.addEventListener('load', async () => {
// 	const o = {
// 		greeting: await Promise.resolve(greeting)
// 	}
//
// 	console.log(
// 		o,
// 		Object.entries(o),
// 		Object.keys(o),
// 		Object.values(o),
// 	)
// })

window.script = (() => {
	const test = () => {
		alert('테스트입니다');
	};

	const getList = async () => {
		// const {data: list} =
		const list = await axios
			.get('http://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				return response.data;
			})
			.catch((error) => console.log(error));

		// console.log(list);

		list.map((v) => {
			return drawItem(v);
		});
	};

	const drawItem = (data) => {
		// const item = document.createElement('p');
		// item.classList.add('item');
		// item.innerHTML = data.title;
		// document.querySelector('.list').appendChild(item);
		const item = `<div class="item">${data.title}</div>`;
		document.querySelector('.list').insertAdjacentHTML('beforeend', item);
	};

	function getUserList() {
		return new Promise((resolve, reject) => {
			var userList = ['user1', 'user2', 'user3'];
			resolve(userList);
		});
	}
	async function fetchData() {
		var list = await getUserList();
		console.log(list);
	}

	window.addEventListener('load', () => {
		getList().then();
	});

	window.addEventListener('DOMContentLoaded', () => {
		console.log('eslint 가 과연??');
		fetchData();
	});

	return {
		test: test,
	};
})();
