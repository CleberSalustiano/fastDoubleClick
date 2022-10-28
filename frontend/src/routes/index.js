import React from "react";

import { Routes, Route } from "react-router-dom";
import { ClickList } from "../pages/ClickList";
import Home from "../pages/Home/index";

const RoutesFunction = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/clicklist" element={<ClickList />} />
	</Routes>
);

export default RoutesFunction;
