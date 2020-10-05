import React, { Component } from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import * as theme from '../theme';

const { width, height } = Dimensions.get('window');
const main = [
  {
    id: 1,
    user: {
      name: 'Laswitan Lagoon',
    },
    saved: true,
    location: 'Cortes, Surigao del Sur',
    title: 'Laswitan Lagoon',
    description: 'The Laswitan Falls and Lagoon is actually a unique 20-foot rock formation located near the shore in Cortes. This geological feature creates three natural basins so that when the surf becomes high, the huge waves would flow and spill into the main basin on the other side, thus creating a waterfall effect.',
    traveldays: "27h",
    expenses: "₱2000",
    route: "Car",
    highestpoint: "NA",
    duration: "2h",
    activity: "Swimming",
    preview: 'https://i.pinimg.com/originals/0d/7e/87/0d7e8718b91ebd94315c57bf4d3fe46a.jpg',
    images: [
      'https://i.pinimg.com/originals/0d/7e/87/0d7e8718b91ebd94315c57bf4d3fe46a.jpg',
      'https://i0.wp.com/theficklefeet.com/wp-content/uploads/2020/01/20191221_laswitan-5.jpg?resize=845%2C475',
      'https://i0.wp.com/theficklefeet.com/wp-content/uploads/2020/01/20191221_laswitan-4.jpg',
      'https://i.ytimg.com/vi/Z0cIjUToRjE/maxresdefault.jpg',
      'https://3.bp.blogspot.com/-YgrnHbnbGZQ/WZE-tFhdoCI/AAAAAAAAAQ8/RtOxUICJAYATGFK4e-zTlpbo13ZcK_2jwCPcBGAYYCw/s1600/Laswitan7.jpg',
    ]
  },
  {
    id: 2,
    user: {
      name: 'La Palmera Mountain Ridge',
    },
    saved: true,
    location: 'Columbio, Sultan Kudarat',
    title: 'La Palmera Mountain Ridge',
    description: 'Mindanao has its very own land of rolling hills and named after a palm plantation.',
    traveldays: "34h",
    expenses: "₱4000",
    route: "Car",
    highestpoint: "1846m",
    duration: "8h",
    activity: "hiking??",
    preview: 'https://i.pinimg.com/originals/71/5b/13/715b13df000493876696942e156140a9.jpg',
    
    images: [
      'https://i.pinimg.com/originals/71/5b/13/715b13df000493876696942e156140a9.jpg',
      'https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2020/08/030308084545/image1-768x576.png',
      'https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2020/08/030308080606/image2-770x578.png',
      'https://files.pia.gov.ph/latest-articles/2020/09/06/pix-columbio.jpg',
    ]
  },
  {
    id: 3,
    user: {
      name: 'Kaparkan Falls',
    },
    saved: true,
    location: 'Tineg, Abra',
    title: 'Kaparkan Falls',
    description: 'Kaparkan Falls is a high-terraced waterfall, filled with a number of small basins. The water in Kaparkan Falls eventually drains down to Tineg River.',
    traveldays: "8h7m",
    expenses: "₱4000",
    route: "Car",
    highestpoint: "1000m",
    duration: "30m",
    activity: "Hiking",
    preview: 'https://sharedcatalog.com//wp-content/uploads/2019/02/39182352_2063942130322605_2432900842047668224_n.jpg',
    images: [
      'https://sharedcatalog.com//wp-content/uploads/2019/02/39182352_2063942130322605_2432900842047668224_n.jpg',
    ]
  },
  {
    id: 4,
    user: {
      name: 'Mount. Iraya',
    },
    saved: true,
    location: 'Batanes, Philippines',
    title: 'Mount. Iraya',
    description: 'Climb to the summit of the highest point of Batanes on this full-day guided tour of Mt. Iraya. If you’re an avid mountaineer and nature lover who want an off-the-beaten-path experience while in the province, then this package is just what you’re looking for. ',
    traveldays: "1h15m",
    expenses: "₱6900",
    route: "Plane",
    highestpoint: "1009m",
    duration: "1h15m",
    activity: "Hiking",
    map: 'https://i.imgur.com/En6ADYS.png',
    preview: 'https://gttp-imgix-net.cdn.ampproject.org/i/s/gttp.imgix.net/225523/x/0/shutterstock-1117120121.jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4',
    images: [
      'https://gttp-imgix-net.cdn.ampproject.org/i/s/gttp.imgix.net/225523/x/0/shutterstock-1117120121.jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4',
    ]
  },
  {
    id: 5,
    user: {
      name: 'Mayon Volcano',
    },
    saved: true,
    location: 'Legaspi City, Albay',
    title: 'Mayon Volcano',
    description: 'See the renowned majestic Mt. Mayon or Mayon volcano in Legazpi, ride an ATV, and hike for a closer look at the perfectly-shaped cone of this Bicol landmark . This thrilling adventure is perfect for those exploring the province of Albay and wants to combine awe-inspiring landscapes with exhilarating activities.',
    traveldays: "1 Day",
    expenses: "₱3500",
    route: "Plane",
    highestpoint: "2463m",
    duration: "1h15m",
    activity: "ATV Ride and Day Hike",
    preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR9didsRaiJ2_7YJe0yY_15d-Xr5ZYhTM-ow&usqp=CAU',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR9didsRaiJ2_7YJe0yY_15d-Xr5ZYhTM-ow&usqp=CAU',
    ]
  },
]


const mocks = [
  {
    id: 1,
    user: {
      name: 'Mossy Forest',
    },
    saved: true,
    location: 'Cagayan Valley, Philippines',
    title: 'Mossy Forest',
    description: 'Mossy forest is characterized by short trees, often with gnarled trunks and branches, that reach 8 m in protected spots but only 2-3 m on ridgetops. In very exposed, steep, windy places, only shrubs 1 m high may be present. Moss covers most tree trunks and branches, often hanging in sheets, and most ground surfaces are covered by moss and leaf litter over a thick layer of humus.',
    traveldays: "30h",
    expenses: "₱3500",
    route: "Car",
    highestpoint: "NA",
    duration: "8h",
    activity: "Hiking",
    preview: 'https://i.pinimg.com/originals/50/f4/97/50f4974f32af94a10e13a310e804375b.jpg',
    images: [
      'https://i.pinimg.com/originals/50/f4/97/50f4974f32af94a10e13a310e804375b.jpg',
      'https://4.bp.blogspot.com/-6eoT4eRlNMQ/UXaJ2EV2rxI/AAAAAAAAMA4/JsmZjzM4t5s/s1600/Pulag+via+Akiki+Tawangan+15.JPG',
      'https://i2.wp.com/danielsecotravels.com/wp-content/uploads/2020/04/Sayang-Mossy-Forest-6-scaled.jpg?fit=750%2C563&ssl=1',
      'https://i2.wp.com/danielsecotravels.com/wp-content/uploads/2020/04/DSC04259-scaled.jpg?fit=750%2C563&ssl=1',
    ]
  },
  {
    id: 2,
    user: {
      name: 'Dupag Rock Formation',
    },
    saved: true,
    location: 'Luna, Apayao',
    title: 'Dupag Rock Formation',
    description: 'The sprawling labyrinth of seven to eight-foot jagged limestone rocks that sit majestically atop a 30-meter high hill in Marag Valley, has been attracting hundreds of local and foreign tourists each day.',
    traveldays: "680km",
    expenses: "₱2000",
    route: "Car",
    highestpoint: "1000m",
    duration: "45m",
    activity: "Hiking",
    preview: 'https://axiang235328881.files.wordpress.com/2019/01/1530877843_explora-dupag-rock-formation-drone-jan-cayaba-8-2.jpg',
    images: [
      'https://axiang235328881.files.wordpress.com/2019/01/1530877843_explora-dupag-rock-formation-drone-jan-cayaba-8-2.jpg',
      'https://christinelevine.files.wordpress.com/2020/02/1530877454_dupag-rock-formation-monte-corpuz-29-1.jpg?w=1024',
      'https://4.bp.blogspot.com/-KoQWU1fmVPE/VILDcplWp7I/AAAAAAAAAao/fmsM1TwH9R8/s1600/BU9A62781.jpg',
    ]
  },
  {
    id: 3,
    user: {
      name: 'Masungi Georeserve',
    },
    saved: true,
    location: 'Tanay, Rizal',
    title: 'Masungi Georeserve',
    description: 'The Masungi Georeserve is a conservation area and a rustic rock garden tucked in the rainforests of Rizal. Masungi’s name is derived from the word “masungki” which translates to “spiked” - an apt description for the sprawling limestone landscape found within.',
    traveldays: "1h35m",
    expenses: "₱3000",
    route: "Car",
    highestpoint: "640m",
    duration: "1h35m",
    activity: "Exploring",
    preview: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Sapot_Masungi_Georserve.jpg',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Sapot_Masungi_Georserve.jpg',
      'https://www.willflyforfood.net/wp-content/uploads/2017/06/masungi-georeserve-survival-guide-2.jpg',
      'https://wanderlass.com/wp-content/uploads/2017/08/nanay2a.jpg',
    ]
  },
  {
    id: 4,
    user: {
      name: 'Kaparkan Falls ',
    },
    saved: true,
    location: 'Tineg, Abra',
    title: 'Kaparkan Falls',
    description: 'as commonly called by the locals is a multi-tiered waterfalls that became famous about 3 or 4 years ago when a group of mountaineers have discovered it. Since then tourist started to flocked this isolated road leading to one of nature masterpiece.',
    traveldays: "8h6m",
    expenses: "₱2000",
    route: "Car",
    highestpoint: "1846m",
    duration: "8h6m",
    activity: "Hiking",
    preview: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/06/3f/53/the-abramazing-kaparkan.jpg',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/06/3f/53/the-abramazing-kaparkan.jpg',
      'https://sharedcatalog.com//wp-content/uploads/2019/02/Have-You-Heard-Of-Kaparkan-Falls-shared-by-SharedCatalog.jpg',
      'https://i.pinimg.com/736x/01/89/ea/0189eac2e9baff227d342abdfb520bc4.jpg'

    ]
  },
  {
    id: 5,
    user: {
      name: 'Malcapuya Island',
    },
    saved: true,
    location: 'Coron, Palawan',
    title: 'Malcapuya Island',
    description: 'Malcapuya Island is the ultimate destination for those looking for soft sandy beaches, clear warm waters, all with a totally secluded appeal.It has some beautiful rocky cliffs and unique formations that offer incredible views over the island. When visiting this island, expect to be surrounded by unspoiled nature and total peace.',
    traveldays: "45m",
    expenses: "₱6000",
    route: "Plane",
    highestpoint: "??",
    duration: "45m",
    activity: "Swimming",
    preview: 'https://cdn.civitatis.com/filipinas/coron/galeria/bulog-dos-island.jpg',
    images: [
      'https://cdn.civitatis.com/filipinas/coron/galeria/bulog-dos-island.jpg',
      'https://i.pinimg.com/originals/a3/17/56/a317564deb45fac6bb0496cb1fd12706.jpg',
      'https://www.travel-palawan.com/wp-content/uploads/2019/01/Malcapuya-Island-Coron.jpg',

    ]
  },
  {
    id: 6,
    user: {
      name: 'Maasin River',
    },
    saved: true,
    location: 'Siargao Island',
    title: 'Maasin River',
    description: 'The Maasin River palm tree swing has recently become one of the most popular adventure spots on the island due to its perfectly placed palm tree that juts out directly over the river.',
    traveldays: "1h15m",
    expenses: "₱2000",
    route: "Plane",
    highestpoint: "1000m",
    duration: "1h15m",
    activity: "Canoeing",
    preview: 'https://www.saltinourhair.com/wp-content/uploads/2019/02/Travel-guide-Siargao-Maasin-Secret-River.jpg',
    images: [
      'https://www.saltinourhair.com/wp-content/uploads/2019/02/Travel-guide-Siargao-Maasin-Secret-River.jpg',
      'https://cdn.civitatis.com/filipinas/coron/galeria/bulog-dos-island.jpg',
      'https://gttp.imgix.net/226262/x/0/siargao-top-land-attractions-day-tour-with-transfers-1.jpg',
      'https://lh3.googleusercontent.com/CogyhuEH6LhsI-8QXcKF-P-TumBhAmp2L1EEdJlx3EKISPpvccnoQ9CkCer0tXhvWWn49nWEh6-PrmD8U_1vBUEOCzxw5e4akItjinenjYIB5W05HmAOE83fbHIIBTPm5EpSmbgpmEyPhn5w4al3LadVKxiRPkgwoiuC91lDxtcyqjcumFYTFSwboOyG2LETul_GbeZnokc9sh-IQAxyIi8xJq_rSyJsQS-HeH_R7dS-BPX3Eq7iwGlCmOPYRbnB7CGRrC0ZmXRC1l7UakZDIlYjxMRb0EptRgxnXEb7aLc7mxb9ptmnZwzemaNK65fPHawuOztZHHyQIv7EasHq8HihL5Y-cSHTLBljESnW26wtXe4mofXaZ01fKSxzoBO4VRWmd3LS8h3MF1wnZRZNUdBqP3XE9knfbxyiZFFdDisgHlQeOsglKQcA06C-dLyK-YMUg3UHWfq7VP0CszFo8bdZUoCiHkslNtP90rAGGN-dmI12ORS9CKW79U9JUHoiylL5yLeiMC4XyHCRENs6SqvZtwIHtIjCvp1eFhVeHpBp1wKq7ARoPjNbEieMce1iwabA4wzuo1gjkydsbGDHgdP_-pNyi5sPOms03CEccYXuvbPWlQt_DNPyhOSY65lY1U6kh3UM_Kt0F2co2YF82IxOnWlEeOSltem7KRXAwfv4hSmcKCnjxcMrTSe57JwWOK8pwGELuloYGZ_XWEHk2NaOFQ=w733-h977-no'
    ]
  },
  {
    id: 7,
    user: {
      name: 'Kawasan Falls',
    },
    saved: true,
    location: 'Badian, Cebu',
    title: 'Kawasan Falls',
    description: 'The magical landscape of the falls is very cool and refreshing, an ideal paradise to anyone who loves and want to get intimate with nature. Enjoy the cold swim in the fresh, crystal clear spring water of these great water falls. The waterfalls make up the Matutinao River System, which has been awarded many times as the cleanest inland body of water in the country. The water coming from the falls is clean and crystal clear.',
    traveldays: "1h30m",
    expenses: "₱1000",
    route: "Plane",
    highestpoint: "1000m",
    duration: "1h30m",
    activity: "Swimming",
    preview: 'https://r4h2t8c4.stackpathcdn.com/wp-content/uploads/2018/06/Falls-Raft-1-1080x728.jpg',
    images: [
      'https://r4h2t8c4.stackpathcdn.com/wp-content/uploads/2018/06/Falls-Raft-1-1080x728.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/1b/82/b7/d7/kawasan-falls-located.jpg',
      'https://www.kawasanfalls.net/wp-content/uploads/2011/04/pana-falls2.jpg',

    ]
  },
  {
    id: 8,
    user: {
      name: 'Puerto Princesa Subterranean River',
    },
    saved: true,
    location: 'Puerto Princesa, Palawan',
    title: 'Puerto Princesa Subterranean River',
    description: 'One of the best tourist spots in Puerto Princesa is the world-renowned Puerto Princesa Subterranean River National Park, which holds a place in the New7Wonders of Nature, and has been included in the UNESCO World Heritage Sites list since 1999. It is is also famously known as the Puerto Princesa Underground River. The 8.2-kilometer-long underground river boasts jaw-dropping cave formations, stunning limestone cliffs, and pristine waters, however, only a portion of the river, around 4.3km, is allowed for tourist explorations. ',
    traveldays: "1h20m",
    expenses: "₱2500",
    route: "Plane",
    highestpoint: "1000m",
    duration: "1h20m",
    activity: "Canoeing",
    preview: 'https://gttp-imgix-net.cdn.ampproject.org/i/s/gttp.imgix.net/225523/x/0/shutterstock-1117120121.jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4',
    images: [
      'https://gttp-imgix-net.cdn.ampproject.org/i/s/gttp.imgix.net/225523/x/0/shutterstock-1117120121.jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4',
      'https://findingbeyond.com/app/uploads/2017/02/puerto-princesa-underground-river-in-palawan-sabang-10.jpg',
      'https://mytanfeet.com/wp-content/uploads/2015/01/Puerto-Princesa-Underground-River-4.jpg',

    ]
  },
  {
    id: 9,
    user: {
      name: 'Coron',
    },
    saved: true,
    location: 'Coron, Palawan',
    title: 'Coron',
    description: 'Get ready to spend the night in one of the best beaches in Coron after a day of island hopping. Taking you to see the iconic Kayangan Lake, Twin Lagoon, and Banul Beach, this private overnight camping experience is perfect for visitors who can’t get enough of the beauty of Coron',
    traveldays: "45m",
    expenses: "₱4900",
    route: "Plane",
    highestpoint: "600m",
    duration: "45m",
    activity: "Overnight Camping",
    preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7cGmMaYz9j6mLhz0YzU9_d09spl7CKxtDNw&usqp=CAU',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7cGmMaYz9j6mLhz0YzU9_d09spl7CKxtDNw&usqp=CAU',
      'https://www.elnidoparadise.com/wp-content/uploads/kayangan-lake-coron-busuanga.jpg',
      'https://clubparadisepalawandemo.hotelpropeller.com/files/2017/03/coron-palawan-1500x700.jpg'

    ]
  },
  {
    id: 10,
    user: {
      name: 'Hundred Islands',
    },
    saved: true,
    location: 'Alaminos, Pangasinan',
    title: 'Hundred Islands',
    description: 'If island hopping tickles your fancy, then this private day tour from Manila to Hundred Islands in Pangasinan is a no-brainer for you! Snorkel with rich marine life, swim at the beach, or simply enjoy the beautiful landscapes of Hundred Islands on this day tour. Guaranteed to be a fun day out under the sun, this tour takes you to islets with beach pockets and caverns for your ultimate island adventure!',
    traveldays: "45m",
    expenses: "₱10,500",
    route: "Plane",
    highestpoint: "??",
    duration: "45m",
    activity: "Touring with Activites",
    preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmnh-6GIRS6nGpzCl0QDlch55MFKQS4yNVGg&usqp=CAU',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmnh-6GIRS6nGpzCl0QDlch55MFKQS4yNVGg&usqp=CAU',
      'https://4.bp.blogspot.com/-Q17NGjWlnN0/WdJx6Bnb3aI/AAAAAAAAlA8/HHVGIubgdsE4sSrtkaWr5jnwOfC1fgFaACLcBGAs/s1600/hundred_islands_philippines.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/16/Pangasinan_Hundred_Islands.jpg',
      'https://www.visitphilippines.org/wp-content/uploads/2016/04/Visit-Philippines-Hundred-Island-780x405.jpg',
    ]
  },
]
const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold',
    marginTop: 0,
    flex: 1,
    width: 0,
    marginLeft: 35,
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 4),
  },
  recommended: {
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: 'bold'
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  }
});

class Articles extends Component {
  scrollX = new Animated.Value(0);
  
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header,]}>
        <View>
          <Text style={{ fontSize: theme.sizes.font * 2, fontWeight: 'bold'}}>Discover the Most</Text>
          <Text style = {{fontSize: theme.sizes.font * 2, fontWeight: 'bold', color: '#139BEC',}}>Breathtaking Destinations</Text>
        </View>
      </View>
    )
  }

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={[
        styles.flex, styles.row,
        { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
      ]}>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index -1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
            />
          )
        })}
      </View>
    )
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
          />
        )
      })
    )
  }

  renderDestinations = () => {
    return (
      <View style={[ styles.column, styles.destinations ]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow:'visible', height: 260 }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  }

  renderDestination = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <View style = {{flexDirection: 'row'}}>
        </View>
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, marginLeft: -45}]}>
            <Text style={{paddingTop: 163, fontSize: 18, color: theme.colors.white, fontWeight: 'bold' }}>{item.user.name}</Text>
              <Text style={{fontSize: 18, color: theme.colors.white }}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 1.5}
                  color={theme.colors.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
  renderMap = () =>{
    return(
    <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.map }}
    ></ImageBackground>
    )
  }
  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View
          style={[
            styles.row,
            styles.recommendedHeader
          ]}
        >
          <Text style={{fontSize: theme.sizes.font * 1.2, fontWeight: 'bold'}}>Recommended</Text>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[ styles.shadow, { overflow: 'visible' }]}
            data={this.props.recommended}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  }

  renderRecommendation = (item, index) => {
    const { recommended } = this.props;
    const isLastItem = index === recommended.length - 1;
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
      <View style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow, 
        index === 0 ? { marginLeft: theme.sizes.margin } : null,
        isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
      ]}>
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
          <View style={[ styles.flex, styles.row, styles.recommendationOptions ]}>
          </View>
        </View>
        
        

        
        <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', height: 100, padding: theme.sizes.padding / 2 }]}>
          <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, color: '#139BEC', }}>{item.title}</Text>
            <Text style={{ color: theme.colors.caption }}>{item.activity} · {item.traveldays}</Text>
          <View style={[
            styles.row,
            { alignItems: 'center', justifyContent: 'space-between', marginTop: 0 }
          ]}>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    )
  }
}

Articles.defaultProps = {
  destinations: main,
  recommended: mocks
};

export default Articles;
