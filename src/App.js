import "./App.css";
let prop = ''
let _URL = 'https://jaspervdj.be/lorem-markdownum/markdown.txt'
fetch(_URL)
.then(response => response.text())
.then(data => console.log(data))
.catch((error) => console.log(error.message))

function App(prop) {
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
