import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Employee from './Employee';
import Course from './Course'
// import Card from './Card'
// import CardClass from './CardClass';
// import EventHandling from './EventHandling';
// import EventHandlinginFun from './EventHandlinginFun';
// import ClassExample from './ClassExample';
// import Cart from './Cart'
// import Listrendering from './Listrendering';
// import ListRenderingS from './ListRenderingS';
// import ConditionalRendering from './ConditionalRendering';
// import MarksTable from './MarksTable';
import Login from './Login'
import Birthday from './Birthday';
// import Lifecycle from './Lifecycle';
// import Counter from './Counter'
// import IntrotoFunctional from './IntrotoFunctional';
// import CounterinFunctional from './CounterinFunctional';
// import Lifecyclemethods from './Lifecyclemethods';
import Fetch from './Fetch'
import Axios from './Axios';
import FetchFun from './FetchFun';
import ApicallsInFun from './ApicallsInFun'
import Postmethod from './Postmethod';
import Putmethod from './Putmethod';
import Delete from './Delete';
import ComponentA from './ComponentA';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/login" element={<Login />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/course/:name" element={<Course />} />
        <Route path="/todo" element={<Fetch />} />
        <Route path="/api" element={<Axios />} />
        <Route path="/FetchInFun" element={<FetchFun />} />
        <Route path="/apiinfun" element={<ApicallsInFun />} />
        <Route path="/post" element={<Postmethod />} />
        <Route path="/put" element={<Putmethod />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
      {/* <Employee /> */}
      {/* <Course /> */}
      {/* <Card name="iphone" desc="this is iphone desc" />
      <Card name="mac" desc="this is mac book desc" />
      <Card name="ipad" desc="this is ipad desc" /> */}
      {/* <CardClass name="iphone 15" />
      <CardClass name="airpods" /> */}
      {/* <Employee name="Krishna" salary="100000" designation="Software Engineer" city="Hyd" /> */}
      {/* <EventHandling />
      <EventHandlinginFun /> */}
      {/* <ClassExample /> */}
      {/* <Cart /> */}
      {/* <Listrendering /> */}
      {/* <ListRenderingS /> */}
      {/* <ConditionalRendering /> */}
      {/* <MarksTable /> */}
      {/* <Login /> */}
      {/* <Birthday /> */}
      {/* <Lifecycle /> */}
      {/* <Counter /> */}
      {/* <IntrotoFunctional /> */}
      {/* <CounterinFunctional /> */}
      {/* <Lifecyclemethods /> */}
    </BrowserRouter>
  );
}

export default App;
