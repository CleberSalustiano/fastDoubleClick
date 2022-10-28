import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { Container } from "./style";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export const ClickList = () => {
	const inputRefStart = useRef(null);
	const inputRefEnd = useRef(null);
	const [clicks, setClicks] = useState([]);
	const [isSortByTime, setIsSortByTime] = useState(false);
	const [isSortByDate, setIsSortByDate] = useState(false);

	useEffect(() => {
		api.get("/").then((response) => {
			setClicks(response.data);
		});
	}, []);

	const handleSortDoubleClick = () => {
		if (!isSortByTime) {
			const newClicks = clicks.sort((a, b) => {
				if (a.timeDoubleClick > b.timeDoubleClick) return 1;
				if (a.timeDoubleClick < b.timeDoubleClick) return -1;

				return 0;
			});

			setClicks([...newClicks]);
			setIsSortByTime(true);
		} else {
			const newClicks = clicks.sort((a, b) => {
				if (a.timeDoubleClick < b.timeDoubleClick) return 1;
				if (a.timeDoubleClick > b.timeDoubleClick) return -1;

				return 0;
			});
			setClicks([...newClicks]);
			setIsSortByTime(false);
		}
	};

	const handleSortDate = () => {
		if (!isSortByDate) {
			const newClicks = clicks.sort((a, b) => {
				if (a.date > b.date) return 1;
				if (a.date < b.date) return -1;

				return 0;
			});

			setClicks([...newClicks]);
			setIsSortByDate(true);
		} else {
			const newClicks = clicks.sort((a, b) => {
				if (a.date < b.date) return 1;
				if (a.date > b.date) return -1;

				return 0;
			});
			setClicks([...newClicks]);
			setIsSortByDate(false);
		}
	};

	const handleFilterDate = async () => {

    const response = await api.get("/")
    let localClicks = response.data

		const newClicks = localClicks.filter((click) => {
			if (!inputRefEnd.current.value && !inputRefStart.current.value) {
				return click;
			} else if (
				!inputRefEnd.current.value &&
				inputRefStart.current.value <= click.date.split("T")[0]
			) {
				return click;
			} else if (
				!inputRefStart.current.value &&
				inputRefEnd.current.value >= click.date.split("T")[0]
			) {
				return click;
			} else if (
				inputRefStart.current.value <= click.date.split("T")[0] &&
				inputRefEnd.current.value >= click.date.split("T")[0]
			) {
				return click;
			}
		});

		setClicks([...newClicks]);
	};

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>
							Data
							<span onClick={handleSortDate}>
								{!isSortByDate && <FiArrowDown />}
								{isSortByDate && <FiArrowUp />}
							</span>
						</th>
						<th>
							Tempo (ms)
							<span onClick={handleSortDoubleClick}>
								{!isSortByTime && <FiArrowDown />}
								{isSortByTime && <FiArrowUp />}
							</span>
						</th>
					</tr>
				</thead>

				<tbody>
					{clicks.map((click) => {
						return (
							<tr key={click.date}>
								<td>
									{/* Formata a data */}
									{click.date.split("T")[0].split("-")[2] +
										"/" +
										click.date.split("T")[0].split("-")[1] +
										"/" +
										click.date.split("T")[0].split("-")[0] +
										" às " +
										click.date.split("T")[1].split(".")[0]}
								</td>
								<td>{click.timeDoubleClick}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div>
				Inicio:
				<input ref={inputRefStart} type="date" />
				Fim:
				<input ref={inputRefEnd} type="date" />
				<button onClick={handleFilterDate}>Filtro</button>
			</div>
		</Container>
	);
};
