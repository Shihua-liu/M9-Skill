import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Sections/Section";
import Card from "../components/Cards/Card";

const Homepage = () =>{
    return(
        <>
        <Navigation />
            <Header 
            BigTitle="Coffeez" 
            SmallTitle="Coffee that will make you smile"
            BtnText="Order"
            />
            <Section 
            BigTitleSection="Tips">
                <Card text="the best coffee mugs" image="koffie1.jpg"/>
                <Card text="the best way to serve coffee" image="koffie2.jpg"/>
                <Card text="coffee art tutorial" image="koffie3.jpg"/>
                <Card text="the best toppings for coffee" image="koffie4.jpg"/>
            </Section>
            <Section>
                <Card />
                <Card />
                <Card />
            </Section>
            </>
    )
}

export default Homepage