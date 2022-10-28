class CreateNewDoubleClickRegistrationService {
	execute(newRegistration) {
		const fs = require("fs");

		if (!fs.existsSync("registrations.json")) {
			const jsonData = JSON.stringify([newRegistration]);

			fs.writeFile("registrations.json", jsonData, function (err) {
				if (err) {
					console.log(err);
				}
			});

			return newRegistration;
		}

		fs.readFile("registrations.json", "utf-8", (err, data) => {
			if (err) {
				throw err;
			}

			const registrationData = JSON.parse(data.toString());

			registrationData.push(newRegistration);

			const jsonData = JSON.stringify(registrationData);

			fs.writeFile("registrations.json", jsonData, function (err) {
				if (err) {
					console.log(err);
				}
			});
		});

		return newRegistration;
	}
}

module.exports = CreateNewDoubleClickRegistrationService;
