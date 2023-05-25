import Card from "./card";


function White(){
    return(
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Card
          title="Card 1"
          description="This is the description for Card 1"
          imageUrl="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
        />
        <Card
          title="Card 2"
          description="This is the description for Card 1"
          imageUrl="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
        />
        <Card
          title="Card 3"
          description="This is the description for Card 1"
          imageUrl="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
        />
        <Card
          title="Card 4"
          description="This is the description for Card 1"
          imageUrl="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
        />
        </div>
    
  
    )
}

export default White;
