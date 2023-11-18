import {ListItem, CustomButton, ImageItem} from './styledComponents'

const ChooseImageItems = props => {
  const {chooseItem, getYourChoice} = props
  const {id, imageUrl, testId} = chooseItem
  const getChoice = () => {
    getYourChoice(id)
  }

  return (
    <ListItem>
      <CustomButton type="button" data-testid={testId} onClick={getChoice}>
        <ImageItem src={imageUrl} alt={id} />
      </CustomButton>
    </ListItem>
  )
}

export default ChooseImageItems
