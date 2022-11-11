import "./Outro.css"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Outro = (props) => {

    console.log(props.Qena)

    let questions = []
    let ratings = []
    props.Qena.map(question => {
        questions.push("Vraag #" + question.number)
        ratings.push(question.rating)
    })



    let data = {
        labels: questions,
        datasets: [
            {
                label: "mijn score",
                data: ratings,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(201, 203, 207, 0.7)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
            // {
            //     label: 'My First Dataset',
            //     data: [65, 59, 80, 81, 56, 55, 40],

            // }

        ]
    }

    return (
        <article className="outro">
            <Bar data={data}></Bar>
        </article>
    )

}
export default Outro;