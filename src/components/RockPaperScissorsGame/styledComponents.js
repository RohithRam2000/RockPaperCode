import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 35px 0px;
  }
`
export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 12px 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const HeaderPart1 = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderPart2 = styled(HeaderPart1)`
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 125px;
  }
`

export const HeaderPart1Para = styled.h1`
  padding: 0px;
  margin: 0px;
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 400;
  font-size: 22px;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  font-family: 'Bree Serif';
  font-weight: 400;
`
export const ScoreValue = styled(ScoreHeading)`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
`
export const BodyImagesList = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  max-width: 320px;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const FooterContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 2px 10px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 12px;
  font-weight: 600;
  width: 75px;
  height: 32px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`
export const PopupImage = styled.img`
  padding: 0px;
  margin: 0px;
  width: 250px;
  margin: 5px 30px 20px 30px;
  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 0px 40px 10px 40px;
  }
`

export const PopupCloseButton = styled.button`
  border: none;
  padding: 5px 8px;
  margin: 5px 5px 0px 0px;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  color: #223a5f;
  font-weight: 600;
`
export const ResultBodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ChoiceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`
export const ChoicePartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`
export const HeadingChoice = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
`
export const ChoiceImage = styled.img`
  width: 150px;
  height: 150px;
`
export const HeadingResult = styled.p`
  font-size: 26px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
`
export const PlayAgainButton = styled(RulesButton)`
  width: 150px;
  height: 40px;
  border-radius: 10px;
`
