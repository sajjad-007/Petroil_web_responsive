tailwind.config = {
    theme: {
      extend: {
        screens: {
          'xxs': '400px',
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
          '2xl': '1400px',
          '3xl': '1600px',
          
        },
        colors: {
          headingbg: '#282828',
          primary: '#F40404',
        },
        spacing: {
          'container': '1144px',
        },
        fontFamily: {
          'poppins': "'Poppins', sans-serif",
        },
        backgroundImage: {
          'bannerimg': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) ,url('./images/banner_img.jpg')",
          'serviceimg1': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) ,url('./images/service_img1.jpg')",
          'serviceimg2': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) ,url('./images/service_img2.png')",
          'serviceimg3': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) ,url('./images/service_img3.png')",
          'learn': "linear-gradient(rgba(0, 0, 0, 0.001),rgba(0, 0, 0, 0.001)) ,url('./images/learn.jpg')",
          'blog1': "linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)) ,url('./images/blog1.jpg')",
          'blog2': "linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)) ,url('./images/blog2.png')",
          'blog3': "linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)) ,url('./images/blog3.png')",
          
        }
      }
    }
  }