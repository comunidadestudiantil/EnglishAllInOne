import { createDrawerNavigator } from '@react-navigation/drawer';
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {BottomTabNavigation}  from './BottomTabNavigation';
import {Menu} from '../components/menu/menu';
import { wp } from '../utils/responsive';
 
const Drawer = createDrawerNavigator();

export  function NavigationDrawer(){

    return(
        <Drawer.Navigator

         screenOptions={{
            headerShown:false,
            drawerStyle:{
                backgroundColor:'rgba(0,0,0,0)',
                position:'absolute',
                top:'0%',
                width:wp('60%'),
                height:'100%',
                //borderTopRightRadius:wp('5%'),
                //borderBottomRightRadius: wp('3%'),
                }
           }}
 
           drawerContent={(props)=> <Menu {...props} />} 
        >
          <Drawer.Screen name='Home' component={BottomTabNavigation}  />
        </Drawer.Navigator>
    )
}