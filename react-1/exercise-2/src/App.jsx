import React from 'react';

function App(){
  return(
    <div id="App">
      <Header/>
      <Temperature/>
      <Footer/>
    </div>
  )
}

function Header(){
  return(
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: XXX</p>
    </header>
  )
}

function Temperature(){
  const temp = 25;
  return(
    <div id="temperature">
      <span>{temp} 0c</span>
    </div>
  )
}

function Footer(){
  return(
    <footer>
      <button>Up</button>
      <button>Down</button>
    </footer>
  )
}

function Content(){
  return(
    <main>
      <Temperature/>
    </main>
  )
}

export default App;

/*
 function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
} 

function Header() {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: XXX</p>
    </header>
  );
}
 
function Content(){
  return(
    <main>
      <Temperature/>
    </main>
  );
}

function Temperature(){
  const temperature = 80;
  return(
    <div id="temperature">
        <span>{temperature} Oc</span>
    </div>
  );
}

function Footer(){
  return(
    <footer>
        <button>Up</button>
        <button>Down</button>
      </footer>
  );
}

export default App;
*/ 