const { Router } = require("express");
const CreateNewDoubleClickRegistrationService = require("../services/CreateNewDoubleClickRegistrationService");

const routes = Router();

routes.get("/", (request, response) => {
	try {
		const fs = require("fs");

		fs.readFile("registrations.json", "utf-8", (err, data) => {
			if (err) {
				throw err;
			}

			const registrationData = JSON.parse(data.toString());

			return response.json(registrationData);
		});
	} catch (err) {
		console.log(err.message);
	}
});

routes.post("/", (request, response) => {
	try {
		const { timeDoubleClick } = request.body;

		const date = new Date();

		const createNewDoubleRegistration =
			new CreateNewDoubleClickRegistrationService();

		const newRegistration = createNewDoubleRegistration.execute({
			timeDoubleClick,
			date,
		});

		return response.json(newRegistration);
	} catch (err) {
		console.log(err.message);
	}
});

module.exports = routes;
