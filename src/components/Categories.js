import { FlatList, StyleSheet } from 'react-native'
import Category from './Category'
import { useGetCategoriesQuery } from '../services/shop'
import LoadingSpinner from './LoadingSpinner'


const Categories = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery()

  if (isLoading) return <LoadingSpinner />
  return (
    <div className='categories'>
<FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => <Category item={item} />}
    />
    </div>
    
  )
}

export default Categories

const styles = StyleSheet.create({
categories:{
backgroundcolor:"rgb(9 19 6 / 68%)"
}
})