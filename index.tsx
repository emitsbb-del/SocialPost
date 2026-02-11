import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SocialPost = () => {
  return (
    <View style={styles.cardContainer}>
      {/* 1. HEADER (SECTOR MAGENTA) */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
            <Image source={{ uri: 'https://instagram.fcuu5-1.fna.fbcdn.net/v/t51.2885-19/568540962_18057098948554212_6189424607617593867_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fcuu5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QFEZWnm4BDZdY8285OUUIsbFX-Q0zrgWd405cRaEvAYcjI-4lbdE10EpclyfABuww0g3af-GYgu95BalC2PUYoL&_nc_ohc=7eB0H-o9L0EQ7kNvwE0E1e8&_nc_gid=3_25rgH7-W1CWznmM3c3hw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afsikkkju00Jm_r_XZq5r0_HAhwiC_6WkLWANNcwzr8CXg&oe=6992BB55&_nc_sid=7a9f4b' }} style={styles.pfp} />
            <Text style={styles.username}>lvsickmar</Text>
          </View>
          <View>
            <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5718/5718983.png' }} />
          </View>
      </View>

      {/* 2. IMAGEN PRINCIPAL (SECTOR CYAN) */}
      <View style={styles.mainImagePlaceholder}>
        <Image style={styles.mainImage} source={{ uri: 'https://instagram.fcuu5-1.fna.fbcdn.net/v/t51.82787-15/631289096_18067911164554212_8584158044197831649_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=101&ig_cache_key=MzgyODQ1NzUwNzQwNDk0NTcwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMS5oZHIuQzMifQ%3D%3D&_nc_ohc=F-KFCDzseC8Q7kNvwEcl2--&_nc_oc=AdnwqNwT2l8QttAPBf6nL1oLwHicITiDLUUq3Jv9C58mxUOnwAAdAgdZIZgtm-CcZemq_xxyWwgcKV5uDoWZSqPC&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=instagram.fcuu5-1.fna&_nc_gid=3_25rgH7-W1CWznmM3c3hw&oh=00_Afu2cogADlYsCg2Vahu2gsZZKaY7jovI_Iugh9OLOdlInw&oe=6992C0FB' }}/>
      </View>

      {/* 3. FOOTER DE ICONOS (SECTOR LIMA) */}
      <View style={styles.footer}>
        <View style={styles.iconPlaceholder}>
          <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }} />
        </View>
        <View style={styles.iconPlaceholder}>
          <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114810.png' }} />
        </View>
        <View style={styles.iconPlaceholder}>
          <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2550/2550207.png' }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 50,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    padding: 8,
  },
  header: {
    height: 60,
    backgroundColor: '#ffffff', // Depuración Neón
    flexDirection: 'row', // <-- ¡CLAVE! Alineación horizontal
    alignItems: 'center', // Centrado en eje cruzado
    paddingHorizontal: 12,
    justifyContent: 'space-between'
  },
  mainImagePlaceholder: {
    width: '100%',
    height: 350,
    backgroundColor: '#f5ff6e22', // Depuración Neón
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: '#ffffff', // Depuración Neón
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconPlaceholder: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    color: '#333'
  },
  options: {
    fontSize: 12,
    color: '#666'
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  pfp: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default SocialPost;