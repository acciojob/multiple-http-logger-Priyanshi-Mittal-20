const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Don't change the above line
// Write your code here
async function fetchData(arr)
{
	for(let i of arr)
		{
			let res= await fetch(i)
			let data= await res.json()
			console.log(data)
		}
}
fetchData(urls)