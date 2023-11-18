import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ChooseImageItems from '../ChooseImageItems'
import {
  MainContainer,
  HeaderContainer,
  HeaderPart1,
  HeaderPart2,
  HeaderPart1Para,
  ScoreHeading,
  ScoreValue,
  BodyImagesList,
  FooterContainer,
  RulesButton,
  PopupContainer,
  PopupImage,
  PopupCloseButton,
  ResultBodyContainer,
  ChoiceContainer,
  ChoicePartContainer,
  HeadingChoice,
  ChoiceImage,
  HeadingResult,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class RockPaperScissorsGame extends Component {
  state = {
    score: 0,
    showResult: false,
    yourChoice: '',
    opponentChoice: '',
    gameResult: '',
  }

  componentDidMount() {
    this.getOpponentChoice()
  }

  renderHeaderView = () => {
    const {score} = this.state

    return (
      <HeaderContainer>
        <HeaderPart1>
          <HeaderPart1Para>
            Rock <br /> Paper <br /> Scissors
          </HeaderPart1Para>
        </HeaderPart1>
        <HeaderPart2>
          <ScoreHeading>Score</ScoreHeading>
          <ScoreValue>{score}</ScoreValue>
        </HeaderPart2>
      </HeaderContainer>
    )
  }

  getRandomValue = () => {
    const value = Math.floor(Math.random() * 10)
    if (value < 3 && value >= 0) {
      return value
    }
    return this.getRandomValue()
  }

  getOpponentChoice = () => {
    const randomValue = this.getRandomValue()
    this.setState({opponentChoice: randomValue})
  }

  getGameResult = () => {
    const {yourChoice, opponentChoice} = this.state
    console.log(yourChoice, 'your choice', opponentChoice, 'opponentChoice')
    if (choicesList[yourChoice].id === choicesList[opponentChoice].id) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (
      choicesList[yourChoice].id === 'PAPER' &&
      choicesList[opponentChoice].id === 'ROCK'
    ) {
      this.setState({gameResult: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      choicesList[yourChoice].id === 'SCISSORS' &&
      choicesList[opponentChoice].id === 'ROCK'
    ) {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      choicesList[yourChoice].id === 'ROCK' &&
      choicesList[opponentChoice].id === 'PAPER'
    ) {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      choicesList[yourChoice].id === 'SCISSORS' &&
      choicesList[opponentChoice].id === 'PAPER'
    ) {
      this.setState({gameResult: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      choicesList[yourChoice].id === 'ROCK' &&
      choicesList[opponentChoice].id === 'SCISSORS'
    ) {
      this.setState({gameResult: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      choicesList[yourChoice].id === 'PAPER' &&
      choicesList[opponentChoice].id === 'SCISSORS'
    ) {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  getYourChoice = id => {
    const indexValue = choicesList.findIndex(eachItem => eachItem.id === id)
    this.setState({yourChoice: indexValue}, this.getGameResult)
    this.setState({showResult: true})
  }

  startAgainGame = () => {
    this.getOpponentChoice()
    this.setState({showResult: false})
  }

  renderBodyView = () => {
    const {showResult, yourChoice, opponentChoice, gameResult} = this.state
    return (
      <>
        {showResult ? (
          <ResultBodyContainer>
            <ChoiceContainer>
              <ChoicePartContainer>
                <HeadingChoice>YOU</HeadingChoice>
                <ChoiceImage
                  src={choicesList[yourChoice].imageUrl}
                  alt="your choice"
                />
              </ChoicePartContainer>
              <ChoicePartContainer>
                <HeadingChoice>OPPONENT</HeadingChoice>
                <ChoiceImage
                  src={choicesList[opponentChoice].imageUrl}
                  alt="opponent choice"
                />
              </ChoicePartContainer>
            </ChoiceContainer>
            <HeadingResult>{gameResult}</HeadingResult>
            <PlayAgainButton type="button" onClick={this.startAgainGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultBodyContainer>
        ) : (
          <BodyImagesList>
            {choicesList.map(imageItem => (
              <ChooseImageItems
                chooseItem={imageItem}
                getYourChoice={this.getYourChoice}
                key={imageItem.id}
              />
            ))}
          </BodyImagesList>
        )}
      </>
    )
  }

  renderFooterView = () => (
    <FooterContainer>
      <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
        {close => (
          <PopupContainer>
            <PopupCloseButton type="button" onClick={close}>
              <RiCloseLine />
            </PopupCloseButton>
            <PopupImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        )}
      </Popup>
    </FooterContainer>
  )

  render() {
    return (
      <MainContainer>
        {this.renderHeaderView()}
        {this.renderBodyView()}
        {this.renderFooterView()}
      </MainContainer>
    )
  }
}

export default RockPaperScissorsGame
