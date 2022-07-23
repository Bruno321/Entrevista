import React from "react";

// Styles
import './CardImageDetail.css'

// Assets
import cross_button from '../../assets/img/cross_button.png'
 
const CardImageDetail = ({id,handleClick}) => {

    const data = [
        {name:'Einstein',text:"All religions, arts and sciences are branches of the same tree. All these aspirations are directed toward enabling man's life, lifting it from the sphere of mere physical existence and leading the individual towards freedom”(Einstein) If there is a single individual in which the spirit of multinationalism manifests itself, it would be Albert Einstein. He shared his knowledge of physics, not just as a science, but as an art. In the same way, Des Arts aims to be the tree which represents life, love, and inclusivity: from which infinite branches of possibilities sprout, and which brings together communities from all corners of the world."},
        {name:'DaVinci',text:'As the original Renaissance Man, Leonardo Da Vinci has been given a plethora of labels for his many fields of expertise. He has since become an icon of intellectual curiosity, having created The Vitruvian Man, symbolizing the unification of all areas of knowledge. It is our aim to create a society that is a well-rounded trailblazer, and a platform that assembles together all the elite members of diverse fields— to emulate The Vitruvian Man in our own right.'},
        {name:'Mozart',text:'Hailed as one of the most well-known composers of all time, Wolfgang Amadeus Mozart became the face of classical music. His unwavering belief in his creative ability enabled him to become an incredibly prolific composer by the age of 35. Des Arts aims to enable individuals to channel the youthful exuberance and artistry that Mozart himself possessed, confidently creating and innovating for the future. '},
        {name:'Jeanne D´Arc',text:'“I am not afraid…I was born to do this.”Jeanne D’Arc is widely known as one of the most influential women in history for her courage and perseverance. As a woman, she was faced by limitations in the male-dominated field of military and politics; however, she broke the boundaries of convention, showing the world that women are just as capable as men. Des Arts is an inclusive organization— we believe that anyone, regardless of gender or background, can participate in this community of creators, as long as they have the urge and the will to create. '},
        {name:'Armostrong',text:'To this day, Neil Armstrong’s contributions to the advancement of humankind remain highly significant— they are displayed in museums, written in history books, and even printed on posters. His most famous line reads, “That’s one small step for man, one giant leap for mankind.”The question, then, is how do the rest of us step forward ourselves while leaping forward for the world? The answer lies in Des Arts— creating art as a small step that ripples into something greater that lies beyond what we’ve ever imagined.'},
        {name:'Chaplin',text:'One of the most famous comic actors of all time, Charlie Chaplin was able to bring joy to audiences without utilizing any sound, a testament to his comedic abilities. Though comic acting in silent films was not a new form of media, Chaplin elevated it to new heights with his talent. However, Chaplin attributed his creativity to striving for the impossible, and like he did, Des Arts will become a pioneer in the web 3.0 ecosystem through striving for the unimaginable.'},
        {name:'Bruce Lee',text:'“Be like water.” Decades later, Bruce Lee’s advice for the world still rings in our ears— a mantra for living life and regaining control of the chaos in our lives. He was not only a martial artist, but also a philosopher, and the intersection of these two fields allowed him to truly emulate the essence of his most famous quote. Ever-changing, developing, and improving. Des Arts channels the spirit that Lee has shared with us by upholding an open-minded approach to innovation and maneuvering the novel space “like water.”'},
        {name:'Mandela',text:'Art is revolutionary. We present you with Nelson Mandela, the face of the anti-apartheid movement and an international symbol of racial reconciliation. Throughout his life, Mandela was a controversial figure who faced torrents of criticism. Yet today, we are able to look back at his achievements and take them for granted, without truly recognizing his sheer bravery and perseverance in the face of injustice. We see blockchain technology as revolutionary, and we at Des Arts assert that we will use our resources for good— a force for inclusivity and social justice.'},
        {name:'Angelou',text:'Civil rights activist and author Maya Angelou has undoubtedly contributed to not only the literary canon of Western literature but has significantly worked to improve the welfare of countless lives. Her art has given a voice to the underrepresented and the oppressed, accomplishing a truly powerful feat of using art to promote equality. We believe that creativity has the potential to have a similar effect here at Des Arts, and we strive to create a community that empowers creators from all backgrounds'},
        {name:'Lagerfield',text:'"Improvise. Become more creative. Not because you have to, but because you want to. Evolution is the secret for the next step." Karl Lagerfield— the man behind the most iconic fashion looks spanning multiple decades— tirelessly produced artwork after artwork in the fashion world, and became the creative director of one of the most famous luxury fashion brands for 36 years. As such, we have been able to witness the impact of this philosophy of creating art, and we at Des Arts create because we want to. Not just want, but yearn. We yearn for evolution, we yearn for innovation and we yearn for endless creativity.'},
        {name:'Miyazaki',text:'Miyazaki’s works are magical capsules of time. Every time someone watches one of his films, they are instantly transported to a different, yet familiar world. There is a certain je ne sais quoi to the nostalgia and sentiment of Miyazaki’s works— and yet somehow, it resonates with audiences of different generations equally. At Des Arts, we believe that creative thinking should remind us of our humanity, that there is something for everyone in our community. After all, we are striving towards something that is timeless. '},
        {name:'Marie Curie',text:'“We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.” Marie Curie was a trailblazer in a plethora of ways. Not only the first scientist to win two Nobel Prizes, she was also the first to win them in different categories. Her confidence and diligence led her to new heights far beyond some of her peers. In the same way, Des Arts is innovative. We are dedicated towards our community, and we are building a VC for the community. We invest in people.'},
        {name:'Muhammad Ali',text:'Muhammad Ali’s accomplishments have spanned beyond his boxing career: an advocate for racial justice and pacifism, Ali lived a life of principles. The personal moral standards with which he committed himself to no doubt led to his success in boxing and his legacy of social justice. Des Arts abides by our principles and our standards. We assert that we commit ourselves to them, creating a long-lasting impact on our community. '},
        {name:'Dali',text:'Surrealist painter Salvador Dali elevated the notion of what it means to be an artist: he was not only known for his prolific compositions and eccentric personality, but also his profound determination to turn art into a powerful force for social emancipation. Des Arts intends to take the torch from Dali, from his iconic looks to formidable feats, we intend to take innovation and entrepreneurialism to new heights and build web 3.0 for the future. '},
    ]
    return (
        <div className="card-image-detail-wrapper">
            <div className="fake-cross-button">
                <img src={cross_button} onClick={handleClick}/>
            </div>
            <div className="card-image-flex">
                <div className="card-image-detail-container">
                    <img src={require(`../../assets/img/pj${id}.png`)}/>
                </div>
                <div className="card-image-detail-text-container">
                    <h1>{data[id].name}</h1>
                    <text>{data[id].text}</text>
                </div>
            </div>
        </div>
    )
}

export default CardImageDetail