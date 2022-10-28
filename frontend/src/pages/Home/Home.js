import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import api from "../../services/api";
import { HomePage } from "./style";

const Home = () => {
	let isClicked = false;
	let timeDoubleClick, timer;
  const navigate = useNavigate();

	const handleDoubleClick = async () => {
		isClicked = !isClicked;

		if (isClicked) {
			timeDoubleClick = 0;
			timer = setInterval(() => {
				timeDoubleClick++;
			}, 1);
		} else {
			clearInterval(timer);
			await api.post("/", {
        timeDoubleClick
      })
		}
	};


	return (
		<HomePage>
			<Button onClick={handleDoubleClick}>Clique Aqui</Button>
      <Button onClick={() => {navigate("/asdasd")}}>Próxima Página</Button>
    </HomePage>
	);
};

export default Home;
