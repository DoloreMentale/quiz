import q1 from '../assets/quiz-img/q1.jpg'
import q2 from '../assets/quiz-img/q2.jpg'
import q3 from '../assets/quiz-img/q3.jpg'
import q4 from '../assets/quiz-img/q4.jpg'
import q5 from '../assets/quiz-img/q5.jpg'
import q6 from '../assets/quiz-img/q6.jpg'
import q8 from '../assets/quiz-img/q8.jpg'

const quizData = {
    metadata: {
        title: 'Quiz on health literacy',
    },
    items: [
        {
            id: 0,
            title: "Who should possess health literacy first and foremost?",
            img: q1,
            choices: [
                {
                    value: "Citizens",
                    selected: false,
                    isCorrect: false,
                    caption: "Not only citizens!!!"
                },
                {
                    value: "Government",
                    selected: false,
                    isCorrect: false,
                    caption: "Not only government!!!"
                },
                {
                    value: "Information producers and providers",
                    selected: false,
                    isCorrect: false,
                    caption: "Not only they!!!"
                },
                {
                    value: "All of them",
                    selected: false,
                    isCorrect: true,
                    caption: "That's correct one! Every agency should have health literacy because competence of each of these agencies are crucial to others."
                }
            ]
        },
        {
            id: 1,
            title: "What sentence is incorrect concerned with health literacy?",
            img: q2,
            choices: [
                {
                    value: "Health literacy determines health behavior",
                    selected: false,
                    isCorrect: false,
                    caption: 'Gotcha! Actually, health literacy is a powerful predictor of health behavior.'
                },
                {
                    value: "Teaching the population health literacy can decrease inequality in health of people from different social classes.",
                    selected: false,
                    isCorrect: false,
                    caption: 'Health education and teaching health literacy is very powerful to reduce social gradient in health.'
                },
                {
                    value: "Lower levels of health literacy may protect from fear during the pandemic.",
                    selected: false,
                    isCorrect: true,
                    caption: 'Yeah, you are right! This sentence does not reflect reality, only higher levels of health literacy may protect from fear during pandemic, because there is no sense to panic for the knowledgeable person who understand what decisions to make and what consequences are possible.'
                },
                {
                    value: "Health literacy can facilitate distinguishing between reliable information on COVID-19 and dis- and misinformation on the topic.",
                    selected: false,
                    isCorrect: false,
                    caption: 'This sentence is correct one.'
                },
            ]
        },
        {
            id: 2,
            title: "What is the COVID-19 myth/conspiracy theory in the statements below",
            img: q3,
            choices: [
                {
                    value: "Covid-19 is spreading in many countries, regardless of whether 5G networks are there.",
                    selected: false,
                    isCorrect: false,
                    caption: 'Haha, be serious! 5G networks is not the cause of COVID-19 and it is spreading in the third world countries, where there are no 5G networks.'
                },
                {
                    value: 'Long-term side effects following COVID-19 vaccination are extremely rare',
                    selected: false,
                    isCorrect: false,
                    caption: 'Long-term effects are very rare case. People can feel bad after vaccination - this is a side effect, which is absolutely normal. It just tells that your body is in the process of building protection.'
                },
                {
                    value: 'Mosquito bites can transmit the COVID-19 virus.',
                    selected: false,
                    isCorrect: true,
                    caption: 'Correct detection of the common myth! WHO says there’s no information or evidence that the new coronavirus could be transmitted through mosquito bites. Firstly, the coronavirus is a respiratory virus, and the main mode of transmission are viral droplets released into the air when an infected person coughs or sneezes. For a mosquito to become infected with a virus, it must be present in the blood the mosquito feeds on. However, SARS-CoV2 is a respiratory virus that is almost exclusively contained within the lungs and respiratory tract of infected people, and rarely gets into the blood. Besides, the mosquito would have to pick up the requisite amount of virus during its bite. For a virus to pass to a person through a mosquito or other kind of insect bite the virus must be able to replicate inside the mosquito. New coronavirus has not been shown to do that.'
                },
                {
                    value: 'COVID-19 vaccines do not change or interact with your DNA in any way.',
                    selected: false,
                    isCorrect: false,
                    caption: 'No interaction with DNA! It’s safe, do not worry about it'
                }
            ]
        },
        {
            id: 3,
            title: 'How to spot fake news?',
            img: q4,
            choices: [
                {
                    value: 'Do not read beyond headlines as headlines are just brief, reliable and trustworthy summary of the article',
                    selected: false,
                    isCorrect: false,
                    caption: 'Headlines can be very misleading! The headlines of fake news often do not reflect the article itself at all, so read beyond! Also, the aim of many headlines is just to get as many click as possible.'
                },
                {
                    value: 'Trust your own intuition - intuition is never wrong',
                    selected: false,
                    isCorrect: false,
                    caption: 'Unfortunately, our intuition cannot always lead to positive consequences for us…Why? “Audiences are likely to believe information that appeals to their emotions and personal beliefs, as opposed to information that is regarded as factual and or objective”. We guess that it is difficult to separate intuition from beliefs.'
                },
                {
                    value: 'Share it with your friends, colleagues, relatives to figure out',
                    selected: false,
                    isCorrect: false,
                    caption: 'This is very bad strategy as this way you only provoke infodemic. One of the articles on infodemic provides the following: ‘Everybody needs to get their news from legitimate places, not from their friend’s friend’s friend’s friend’.'
                },
                {
                    value: 'Consult a fact-checking site, if there are such',
                    selected: false,
                    isCorrect: true,
                    caption: 'This is one of the ways to spot fake news, which is mentioned in the article “The Covid‐19 ‘infodemic’: a new front for information professionals”.'
                }
            ]
        },
        {
            id: 4,
            title: 'What is inefficient way to slow down or stop infodemic?',
            img: q5,
            choices: [
                {
                    value: 'use of repressive measures (e.g. blocking sources of information, mass media and social networks and messengers, the application of criminal penalties for individuals who distribute fake news)',
                    selected: false,
                    isCorrect: true,
                    caption: 'Yeah, you are right! According to the recent study RANEPA, administrative and criminal repression measures to persons who disseminate false information in conditions of an acute shortage of official and reliable information, in turn, only boost the infodemia and aggravates its course. Firstly, the repression further undermines the already low trust in the government institutions; and secondly, every such precedent is covered by the media. In the paper it was also emphasized that the use of administrative and criminal penalties in each case can be considered by the population as the state\'s counteraction to the practices of solidarity which are common in emergency situations.'
                },
                {
                    value: 'stimulate the emergence of portals dedicated to the analysis of fake news',
                    selected: false,
                    isCorrect: false,
                    caption: 'Well, well, well this way is pretty much good because if people doubt some information, they can consult such website. Reading the analysis of fake news will help people to understand the nature of fake news and negative outcomes of sharing such news.'
                },
                {
                    value: 'teach citizens health literacy & media literacy',
                    selected: false,
                    isCorrect: false,
                    caption: 'Educating people is always a good idea as well as in case of infodemic.'
                },
                {
                    value: 'make medicine information must be easy-to-access, easy-to-understand, easy-to-use, culturally relevant to various populations.',
                    selected: false,
                    isCorrect: false,
                    caption: 'These ones are crucial ethics for information providers, that ease the life of all citizens'
                }
            ]
        },
        {
            id: 5,
            title: 'Konstantin received a positive result for COVID-19 test. What should he do?',
            img: q6,
            choices: [
                {
                    value: 'Of course, go to buy food, otherwise how to stay at home in the coming days.',
                    selected: false,
                    isCorrect: false,
                    caption: 'Food is certainly important, but the risk of infecting other people is what should stop one from shopping rashly. Delivery of food is a wonderful invention that can help a person in quarantine, as well as reaching out to volunteers.'
                },
                {
                    value: 'Start looking for treatment options on the Internet.',
                    selected: false,
                    isCorrect: false,
                    caption: 'Most likely, in this way, one will only increase anxiety and find signs of new non-existent diseases. Better to call a doctor and entrust your health to professionals.'
                },
                {
                    value: 'Go to the clinic according to the place of registration or place of residence.',
                    selected: false,
                    isCorrect: false,
                    caption: 'You are thinking in the right direction, it is really worth seeking medical help, but instead of running to the clinic, you should call there, and the medical workers will come to you.'
                },
                {
                    value: 'You need to call the residential information telephone at the polyclinic at your place of residence.',
                    selected: false,
                    isCorrect: true,
                    caption: 'You\'re right! Medical organizations recommend doing exactly this.'
                }
            ]
        },
        {
            id: 6,
            title: 'Who are the patients of the high-risk group for coronavirus?',
            choices: [
                {
                    value: 'Children, pregnant women, elderly people;',
                    selected: false,
                    isCorrect: false,
                    caption: 'According to WHO, with COVID-19, children, according to preliminary information, are less susceptible to infection than adults, and in most cases they do not carry the disease in a severe form. Children, pregnant women are in the high-risk group for influenza. '
                },
                {
                    value: 'Children, elderly people;',
                    selected: false,
                    isCorrect: false,
                    caption: 'According to WHO, with COVID-19, children, according to preliminary information, are less susceptible to infection than adults, and in most cases they do not carry the disease in a severe form.'
                },
                {
                    value: 'Persons with background diseases, children;',
                    selected: false,
                    isCorrect: false,
                    caption: 'According to WHO, with COVID-19, children, according to preliminary information, are less susceptible to infection than adults, and in most cases they do not carry the disease in a severe form.'
                },
                {
                    value: 'Persons with underlying medical conditions, the elderly people;',
                    selected: false,
                    isCorrect: true,
                    caption: 'Yes! You’re right. There are some disagreements among different sources, but the World Health Organization says that these are the categories that fall into the high-risk group.'
                }
            ]
        },
        {
            id: 7,
            title: 'What should a person do to find reliable information about the coronavirus?',
            img: q8,
            choices: [
                {
                    value: 'Search everything in English, English-language media provide only relevant and useful information.',
                    selected: false,
                    isCorrect: false,
                    caption: 'Most international medical organizations publish their materials in English. But not all material in English becomes automatically official and correct, and in the English-language media you run the risk of being confronted with false information.'
                },
                {
                    value: 'Follow the information of the world health organization and the articles of respected scientific and medical publications;',
                    selected: false,
                    isCorrect: true,
                    caption: 'Bingo! Covid-19 is an everyday element of work for WHO. Therefore, the organization\'s website contains a lot of useful information, but this is not the only source. There are other respected and important medical organizations, but still pay attention to the citation of scientific sources. For more helpful tips on how to seek quality health information during a pandemic, read an excellent guide by Medusa magazine!'
                },
                {
                    value: 'Ask those who have already been ill, they know exactly what to do, and whether the disease is really dangerous;',
                    selected: false,
                    isCorrect: false,
                    caption: 'The disease can be different for each patient, and your friend\'s experience may not always help you. Despite the fact that someone has had the coronavirus, he / she still does not become a medical professional. So, it is better to get health recommendations from qualified medical professionals.'
                },
                {
                    value: 'It is worth looking at all the available resources that the browser gave me when I requested it on the Internet.',
                    selected: false,
                    isCorrect: false,
                    caption: 'Scientists call what is happening with information about the coronavirus infodemic. Reading everything that catches your eye can confuse you or lead you to false information, it is better to devote your attention to trusted sources!'
                }
            ]
        },
        {
            id: 8,
            title: 'What are the similarities between influenza and coronavirus?',
            choices: [
                {
                    value: 'The speed of transmission;',
                    selected: false,
                    isCorrect: false,
                    caption: 'According to the World Health Organization, the influenza can spread faster than COVID-19. '
                },
                {
                    value: 'Both mostly affect children;',
                    selected: false,
                    isCorrect: false,
                    caption: 'The same WHO writes that children have a huge role in transmission of influenza, but children are less susceptible to coronavirus infection. The infection of children comes from adults, and not vice versa.'
                },
                {
                    value: 'Similar disease presentation and transmission routes;',
                    selected: false,
                    isCorrect: true,
                    caption: 'The World Health Organization would say you are right!'
                },
                {
                    value: 'The high-risk group;',
                    selected: false,
                    isCorrect: false,
                    caption: 'No :( The high-risk group for coronavirus consists of people with underlying medical conditions and the elderly people. These people and also children, pregnant women are in the high-risk group for influenza.'
                }
            ]
        }
    ]
}

export default quizData
