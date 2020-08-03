import React, { useEffect, useState } from 'react'
import Timeline from 'react-image-timeline'
import Gallery from 'react-grid-gallery'
import './App.css'

import summerSaltImg from "./images/timeline/summer_salt.jpg"
import riverwalkImg from "./images/timeline/riverwalk.jpg"

export default function Home() {
  const [timeline, setTimeline] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    const timelineEvents = [
      {
          date: new Date(2019, 8, 30),
          text: "Our first date, at Bowlero, then the Riverwalk",
          title: "First Date",
          buttonText: 'View',
          imageUrl: riverwalkImg,
          // onClick: console.log,
      },
      {
        date: new Date(2020, 2, 16),
        text: "A fun night in Birmingham at a small, local concert for the rock band Summer Salt",
        title: "Summer Salt Concert",
        buttonText: 'View',
        imageUrl: summerSaltImg,
        // onClick: ()=> window.open("/images/IMG_4284.mov", "_blank"),
    },
  ];

    setTimeline(timelineEvents)
  
    // TODO: simply loop through all images in directory
    const IMAGES = [
      {
        src: "https://lh3.googleusercontent.com/-gOugUlZaF6auK5tkCbZz2u8schwroPwDa2dY7DAgQffdEq2dlKv2_GcrRCaS12Ue6U5Fzhj7Wbg4pVx_MGJEDkNMj9p_vjNJ1VX99stl4BYUmq7qZibx1723aYQSPPCHmSoSxfAlcT5Lrzw8S4SBa49xgfk9BuqgocvW9hsNKb6F8nM06s0PGYN0B9Z3bKlJPlCI_i1By0_XllBVbzEI4sSy9MDGykAfQTv-Unnjb0OS1V_rKhLQXdEeFpP2bt7am5wbO3QReFBG5SSGQvCiKZBmM_46qSOOvwyRTECY1Rto_qjn-5OmFfDtu7sJcv78r86nQytkDTmidEPbEox_TIfDOXzr09G6VdCEjhttPkokWH2yu-AMbR3bSu0KCI8zxvsWfkd17dK9wKkf51fWBO74PxzeewVgiHvEZ4FS2dcmXB2-HSr6ipwbE2Vd3xJxNLcmXF1XqhlQwBeHymbdv_wEQadyEeIWLc5tSZS9GUkuHKNIGTDMca5Lxc81qEOinHf25BqAdXSES_tX2-sUP4CMmKBSUwwvTru9PC04Eaq2l5wyH_7X5p4uyJYn_cNeBLTHzcE10gy_9_tifG1oRqb-IYzkihJdvxKlcr8ghWKI_NMHsP4c22ppIiCR5OEbR0337HYkOa1oFCV6LmmXsbNu5VXrmivA2_ugWEc90x2HjtEakga0rfql9mR=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/-gOugUlZaF6auK5tkCbZz2u8schwroPwDa2dY7DAgQffdEq2dlKv2_GcrRCaS12Ue6U5Fzhj7Wbg4pVx_MGJEDkNMj9p_vjNJ1VX99stl4BYUmq7qZibx1723aYQSPPCHmSoSxfAlcT5Lrzw8S4SBa49xgfk9BuqgocvW9hsNKb6F8nM06s0PGYN0B9Z3bKlJPlCI_i1By0_XllBVbzEI4sSy9MDGykAfQTv-Unnjb0OS1V_rKhLQXdEeFpP2bt7am5wbO3QReFBG5SSGQvCiKZBmM_46qSOOvwyRTECY1Rto_qjn-5OmFfDtu7sJcv78r86nQytkDTmidEPbEox_TIfDOXzr09G6VdCEjhttPkokWH2yu-AMbR3bSu0KCI8zxvsWfkd17dK9wKkf51fWBO74PxzeewVgiHvEZ4FS2dcmXB2-HSr6ipwbE2Vd3xJxNLcmXF1XqhlQwBeHymbdv_wEQadyEeIWLc5tSZS9GUkuHKNIGTDMca5Lxc81qEOinHf25BqAdXSES_tX2-sUP4CMmKBSUwwvTru9PC04Eaq2l5wyH_7X5p4uyJYn_cNeBLTHzcE10gy_9_tifG1oRqb-IYzkihJdvxKlcr8ghWKI_NMHsP4c22ppIiCR5OEbR0337HYkOa1oFCV6LmmXsbNu5VXrmivA2_ugWEc90x2HjtEakga0rfql9mR=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/JS7p4TLJDw0o4FgVD6rn1umq8UqZ6qsU9Yva3q0_iQFrxIx2XyRAJhXUa3_mtTkX908sRkepgdt6SjDDRobSbdS7EO6eG8umKceNisH7XpZ3M_I-ZnQLUM0GwwuR46r2YDLkKpIjVuM-JepjBfoWiQ0NSu9NJaPXVHt6_VaddnnOsRNFYPFVvwTI9xt_BnwEFmtvnB72pasCwRyS3P8jb2sANjAcykMHPCuC1tX0oXph7Fp58cTrZ0T9JcpsU5EvdJ1pUvqxYfvwxZep7wKxDU9K77KXLsNOAUFSkYi90hZt_OOBnb6bYWDObbtRJrrf2VSn17b4r6OYDi6TbZPN7NCpf9KYgpDENlGeJuzur8g_teH29YVLvh4xAQD8ajnqIFMevmEazOgmoInumS1xFNpgu3zhFPLBljY9GONqs77s5dkWPqV3pPpDea8T7JTiRZ-HIXQ5o1b6FxoRB4RaMR6gx6gCPtjsHG6V2unosgNw8E7P3qjgwfEOmOqTSCte5Kq9yJfc_ZpF_asKWkcYjJktIimT7WarGiwd2NaQnKH1wC88TuxQ0s_gMJR0VlH5FikeVCHB3eOpQ40kVGBxlgyvuk3AQiPlfLQxYOF0hY99UtoTBbr-lyed7ehQqTly-DGNAYTZv4ZiP2DoTyJwtTiPupJLDsEJAh730OJQFrfRiprLgzv_7stcRpI-=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/JS7p4TLJDw0o4FgVD6rn1umq8UqZ6qsU9Yva3q0_iQFrxIx2XyRAJhXUa3_mtTkX908sRkepgdt6SjDDRobSbdS7EO6eG8umKceNisH7XpZ3M_I-ZnQLUM0GwwuR46r2YDLkKpIjVuM-JepjBfoWiQ0NSu9NJaPXVHt6_VaddnnOsRNFYPFVvwTI9xt_BnwEFmtvnB72pasCwRyS3P8jb2sANjAcykMHPCuC1tX0oXph7Fp58cTrZ0T9JcpsU5EvdJ1pUvqxYfvwxZep7wKxDU9K77KXLsNOAUFSkYi90hZt_OOBnb6bYWDObbtRJrrf2VSn17b4r6OYDi6TbZPN7NCpf9KYgpDENlGeJuzur8g_teH29YVLvh4xAQD8ajnqIFMevmEazOgmoInumS1xFNpgu3zhFPLBljY9GONqs77s5dkWPqV3pPpDea8T7JTiRZ-HIXQ5o1b6FxoRB4RaMR6gx6gCPtjsHG6V2unosgNw8E7P3qjgwfEOmOqTSCte5Kq9yJfc_ZpF_asKWkcYjJktIimT7WarGiwd2NaQnKH1wC88TuxQ0s_gMJR0VlH5FikeVCHB3eOpQ40kVGBxlgyvuk3AQiPlfLQxYOF0hY99UtoTBbr-lyed7ehQqTly-DGNAYTZv4ZiP2DoTyJwtTiPupJLDsEJAh730OJQFrfRiprLgzv_7stcRpI-=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/9PRVWITytNZZJZqLjUQSXVqJrpk_T4o2dn_huT1pV5lpp-NDDCrKrxWyn6xFHz6fuP9K0Kaf3kj4cH12roXU_wiMF8TQcJ_gjKkxacf1u-AayF80GJCkU2m-gGWL1hnlM1um7cRG-PgVUzLHXRxaDHED0VSETs42EPC52UZ_vkkYnmDOBl2FoJuH9A7nXi2-yaH1jarSLPdqhq1pY7WcZ4G4bqnZ0Woy13LVMNuTM7rsuv7YOrRRrLJwSRLTx7fTm5qKAfbDKvyAKMIyEvhlCuZE1PegS8qAM9gitvThEjbBGxqduVikSxWIVofDexfexuda2Yv2KNztdRIHwnHwPYOAPC3_o-nl64tBSdoWE88xWKwqHRupm2KJfHFNE2PZGww6QDYBqCnqFZD3QOLyrzjnVyVRg345t-tW1G7vEJaG_fvvaVeX9NRchla00aTsmbJ80kf4Sfqxi_x-bvxh6zZin5axrLVEDuyhPgN8ivWeM1yiHzkiGB0Mag0e27Y2-ZmJ6YfVfzkvHuvSChi1BxCPYrcodfwT2vWSyoPuArp7iXNULGz2TuPTIpFutFPTydtZTdonpxbpMJiN8ubWXz7vG0j4hRqGKoSbM954OfAvsMv78fTOcYGEF0S06xDvAXfYK5WbdIYyCtRIkUDoVq4apR7IEqwe2vpYvEYTy3ycp7CiYNMcvzxj2Nix=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/9PRVWITytNZZJZqLjUQSXVqJrpk_T4o2dn_huT1pV5lpp-NDDCrKrxWyn6xFHz6fuP9K0Kaf3kj4cH12roXU_wiMF8TQcJ_gjKkxacf1u-AayF80GJCkU2m-gGWL1hnlM1um7cRG-PgVUzLHXRxaDHED0VSETs42EPC52UZ_vkkYnmDOBl2FoJuH9A7nXi2-yaH1jarSLPdqhq1pY7WcZ4G4bqnZ0Woy13LVMNuTM7rsuv7YOrRRrLJwSRLTx7fTm5qKAfbDKvyAKMIyEvhlCuZE1PegS8qAM9gitvThEjbBGxqduVikSxWIVofDexfexuda2Yv2KNztdRIHwnHwPYOAPC3_o-nl64tBSdoWE88xWKwqHRupm2KJfHFNE2PZGww6QDYBqCnqFZD3QOLyrzjnVyVRg345t-tW1G7vEJaG_fvvaVeX9NRchla00aTsmbJ80kf4Sfqxi_x-bvxh6zZin5axrLVEDuyhPgN8ivWeM1yiHzkiGB0Mag0e27Y2-ZmJ6YfVfzkvHuvSChi1BxCPYrcodfwT2vWSyoPuArp7iXNULGz2TuPTIpFutFPTydtZTdonpxbpMJiN8ubWXz7vG0j4hRqGKoSbM954OfAvsMv78fTOcYGEF0S06xDvAXfYK5WbdIYyCtRIkUDoVq4apR7IEqwe2vpYvEYTy3ycp7CiYNMcvzxj2Nix=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/Zc_cLDwXBD6WVeQcz0fWC60ZLvy0RX3X1Ca9dHvPDPXU-epPYnLx3hdkzn98nWvwRirvHrFnG4T95Z1wqxOLkThKVfUDn0bWlZjle2eEdB7yGaVG4TmZVUD3WQObeWj7Xhz1jctoBLo3h75fkA8eI8-ognuzr0njlCmKcmLOvIimdMq_MaI9IiLmzAtIZPZHAAqV2t6rMPyKyXjskk3EziQJnWnCG3XMJnFY_Y-v0A1uhFH4nqWIB0yKfN4B19YnsTb_diMnhkbLYexgevgWU8EqAMfQGFCRogeNc8euuYBwTp9PnlnUUe6u0WzWymzg17FWQtnoo_RqiDnHRnbgqYGx0BYzaif-Sv1O4LktISAlhkjAgUFo20j_PwsKZc_EnFSal1-wMsJ6SFyZX3XY0l62lNjDTxkLndaNM4k60BKR1rik15jOpkiimAs-rAf53sEHScaSNowKHrPXj2MEljWmIZzuxFWNRZQw6jvKT7ZkZia2ZwoDtWvpqxmv4sK2TCeFlf0ob47Zz9jEeGeN0kHjEfRi0IbTfmefTOBwnAPOd12qNU4TtWZZLBMd4-c_IxrAWIZy4xlOYRINq7NFR1dW7bd4hw0Zb4sIes6qWgKWkQ6KELQZTBbwSdbcSSJPQpjkwb3bitD0qElntiM_L6h8iBSKrgmiFl8YJ6WEOze-wVDTYtcwiuaYPX6P=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/Zc_cLDwXBD6WVeQcz0fWC60ZLvy0RX3X1Ca9dHvPDPXU-epPYnLx3hdkzn98nWvwRirvHrFnG4T95Z1wqxOLkThKVfUDn0bWlZjle2eEdB7yGaVG4TmZVUD3WQObeWj7Xhz1jctoBLo3h75fkA8eI8-ognuzr0njlCmKcmLOvIimdMq_MaI9IiLmzAtIZPZHAAqV2t6rMPyKyXjskk3EziQJnWnCG3XMJnFY_Y-v0A1uhFH4nqWIB0yKfN4B19YnsTb_diMnhkbLYexgevgWU8EqAMfQGFCRogeNc8euuYBwTp9PnlnUUe6u0WzWymzg17FWQtnoo_RqiDnHRnbgqYGx0BYzaif-Sv1O4LktISAlhkjAgUFo20j_PwsKZc_EnFSal1-wMsJ6SFyZX3XY0l62lNjDTxkLndaNM4k60BKR1rik15jOpkiimAs-rAf53sEHScaSNowKHrPXj2MEljWmIZzuxFWNRZQw6jvKT7ZkZia2ZwoDtWvpqxmv4sK2TCeFlf0ob47Zz9jEeGeN0kHjEfRi0IbTfmefTOBwnAPOd12qNU4TtWZZLBMd4-c_IxrAWIZy4xlOYRINq7NFR1dW7bd4hw0Zb4sIes6qWgKWkQ6KELQZTBbwSdbcSSJPQpjkwb3bitD0qElntiM_L6h8iBSKrgmiFl8YJ6WEOze-wVDTYtcwiuaYPX6P=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/_n7y1ShW8X3NisOMn1BHY9rfft2ylke4qAYORsFBvee0cnNRhhNKZBnut3BFSq_ZcmBvZUY9g9eLo4O4fSIrU0w-s37cBhHM8ShdNUEIThAQUwozg_INmZvwhhF8SllZNXUmRdP3PZRvoBr-5K6hnq7WBAuPLopkHQRFN0KXWotPKikH6r2X9biCseiOKT7pDMRmVPk4wGYQxel0O683I4unOU-IaTjD3KEggBQPe8nIj0UTPzgUjUbrcIzGhBZPbGvjD2cpkAQ1OiI0esOaOhfCQ3lxyKoo8Al0RnkVuBQIUUCSkP9_tb9eJ46--WskO0eFO7LqBc6ZBxPk1mbEyUvXpODjXmQW8NSWBfrI6xdkCncSI7E4RFLw9JP9D5pnDCFIHyUxHlDwlm_uBVPRMMUcJS1ntR_zkiZtfGOPNIII97NFsbmKNDZTE2NXNEZq35_iOcFHtcUWI59Xgh66HqhlaS6P_VLyz3RXrATxsLVBAywvM7chR-32GqswzryoK5rdlE2k07uzQptn2hC3dj_qlzvm4slbY8WmoOFyAoZ1PzHNaUQ4wX5uBgvQ4XD-pRNgv_rOgG0AKPh2nofpLifP_nW93GU84db4GxKB-FYBvhwQ0KNUooDQwStQvk-6hZXVdfxbkUoN_JXk9r0m9EFGdf6SIUb02Z9LqTPJm063h6fNCpsBFt4oxiGM=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/_n7y1ShW8X3NisOMn1BHY9rfft2ylke4qAYORsFBvee0cnNRhhNKZBnut3BFSq_ZcmBvZUY9g9eLo4O4fSIrU0w-s37cBhHM8ShdNUEIThAQUwozg_INmZvwhhF8SllZNXUmRdP3PZRvoBr-5K6hnq7WBAuPLopkHQRFN0KXWotPKikH6r2X9biCseiOKT7pDMRmVPk4wGYQxel0O683I4unOU-IaTjD3KEggBQPe8nIj0UTPzgUjUbrcIzGhBZPbGvjD2cpkAQ1OiI0esOaOhfCQ3lxyKoo8Al0RnkVuBQIUUCSkP9_tb9eJ46--WskO0eFO7LqBc6ZBxPk1mbEyUvXpODjXmQW8NSWBfrI6xdkCncSI7E4RFLw9JP9D5pnDCFIHyUxHlDwlm_uBVPRMMUcJS1ntR_zkiZtfGOPNIII97NFsbmKNDZTE2NXNEZq35_iOcFHtcUWI59Xgh66HqhlaS6P_VLyz3RXrATxsLVBAywvM7chR-32GqswzryoK5rdlE2k07uzQptn2hC3dj_qlzvm4slbY8WmoOFyAoZ1PzHNaUQ4wX5uBgvQ4XD-pRNgv_rOgG0AKPh2nofpLifP_nW93GU84db4GxKB-FYBvhwQ0KNUooDQwStQvk-6hZXVdfxbkUoN_JXk9r0m9EFGdf6SIUb02Z9LqTPJm063h6fNCpsBFt4oxiGM=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/eLirwhHvl5S1tF5o2BxYygwFD5i4DYNwjm1YEIH9aIVQ9DxLE9ovmOuEQZYhGA-RfYG_sC5V00uLvODpaTkPkhgvHGGFqXW6AEgDb9s_M0SUZsUu128M0QIxzDAudUEFysujgyy_aNodRAzjpcwvXRFOdUOQwGw-6_HDCz4kR5MXVQMpzuOomgU1b6NxqK_ssMfGtAV1MiVF29oNZeD1Ky2-ztMHgE6pLuCMnnhi56xRS_P-TBnmlhlNgW_ltN141DzgFSzULLCIrs89lHdqhVfs-TzFmqIyRjrGI7TRsPyYcIhjoVVOzNmy7Zl9UphBSkEc4MTn6Fy58P5M3LQ8E3wBk8i4TL5xopZ5r_EIdBID5hsGYMlZ0pDfp_2hhA49YvS__V75eLJs2UdmbrRMxmT5YieznxnHNCKRgOJuy6jbDxPPPiHJBdANgFgB8v9I8PSgMt8Vj4kY9TZYFXBOWrn449Im9I15U7_-ivQTJ2LXx27le66XV6KhlV1TvEj3L4rAe6diBHhiWRX--1i7eCRLQIBvx4j3z3FL5uFk2TnLxvDgI_3O7ZiJUBeBQgdW6nypFGOyyniZVULLi3v5CF96p4g_SSK8VO3QfpKAzYcrnHeCQdrVWSm5kTeAxTkF2gsQgaKJerE3m0WIeiJbpEZFI9tPEEuqA7uTCUea4311glmNY4PlXse-6AIL=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/eLirwhHvl5S1tF5o2BxYygwFD5i4DYNwjm1YEIH9aIVQ9DxLE9ovmOuEQZYhGA-RfYG_sC5V00uLvODpaTkPkhgvHGGFqXW6AEgDb9s_M0SUZsUu128M0QIxzDAudUEFysujgyy_aNodRAzjpcwvXRFOdUOQwGw-6_HDCz4kR5MXVQMpzuOomgU1b6NxqK_ssMfGtAV1MiVF29oNZeD1Ky2-ztMHgE6pLuCMnnhi56xRS_P-TBnmlhlNgW_ltN141DzgFSzULLCIrs89lHdqhVfs-TzFmqIyRjrGI7TRsPyYcIhjoVVOzNmy7Zl9UphBSkEc4MTn6Fy58P5M3LQ8E3wBk8i4TL5xopZ5r_EIdBID5hsGYMlZ0pDfp_2hhA49YvS__V75eLJs2UdmbrRMxmT5YieznxnHNCKRgOJuy6jbDxPPPiHJBdANgFgB8v9I8PSgMt8Vj4kY9TZYFXBOWrn449Im9I15U7_-ivQTJ2LXx27le66XV6KhlV1TvEj3L4rAe6diBHhiWRX--1i7eCRLQIBvx4j3z3FL5uFk2TnLxvDgI_3O7ZiJUBeBQgdW6nypFGOyyniZVULLi3v5CF96p4g_SSK8VO3QfpKAzYcrnHeCQdrVWSm5kTeAxTkF2gsQgaKJerE3m0WIeiJbpEZFI9tPEEuqA7uTCUea4311glmNY4PlXse-6AIL=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/uVtiP8dIIWspaF1InXCSHItQNhwQcr1xCir3kjQwnCVhV5aY6V-gfeqCPrlTG7oY9hW4n2fC2Rey6Y-BRV0qinnc8yP0-AkXxwHMrJSKx-3vD_FdnTfExG8XX4WbWAGy_nyotZ5t6vfYx2xl0uym9M24VFOmdCv1Q4YLfx7mPzFzAYysYgrYiCTgCrkv24ZSg9Va8UHqoFLekRIXeCbFY2GH3cu_DbNqdIMxF6vqgGmLGBRD62Zduwezn1gayrUFsIs_uhMEB1_yW952X3q-uJgejem_e3qBEX-IFwNr_jI860dUVL20A_hMCy5rugjD8GopwvNUag45q3u0nJSjB5vaB3K-kJzrZ4XXaIwKPbMQ2tRzOsua_yg0FnyaJ____SReI1bE76n9q8DVjWIqoioliRrKGth0crCssEJFh2kav0b0aYRZpl1lDVG2A2Dqe_ePS5KJ3excy758xot17j8MOw-CfDoq0HPzHA4hTmbJK_p7GP-QnSXGDDvgo5Tx-Z0UjOdlLe7YvzGbnP0Kzanm95hAGkXi9mJVN8mTCbpAtvqjsjXMqplaKemE1kIvfTFjIGL_eG1N1P3bEZgjmKOh-6M3Abh-PQUPWHHsokmlYi-89pVplcNRzKigmfmUwmNT68F5_AXQkTTxJPIn3znk6k6V51CE9V0WO5KD_PNUzu6iHVnbyc0tXXTj=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/uVtiP8dIIWspaF1InXCSHItQNhwQcr1xCir3kjQwnCVhV5aY6V-gfeqCPrlTG7oY9hW4n2fC2Rey6Y-BRV0qinnc8yP0-AkXxwHMrJSKx-3vD_FdnTfExG8XX4WbWAGy_nyotZ5t6vfYx2xl0uym9M24VFOmdCv1Q4YLfx7mPzFzAYysYgrYiCTgCrkv24ZSg9Va8UHqoFLekRIXeCbFY2GH3cu_DbNqdIMxF6vqgGmLGBRD62Zduwezn1gayrUFsIs_uhMEB1_yW952X3q-uJgejem_e3qBEX-IFwNr_jI860dUVL20A_hMCy5rugjD8GopwvNUag45q3u0nJSjB5vaB3K-kJzrZ4XXaIwKPbMQ2tRzOsua_yg0FnyaJ____SReI1bE76n9q8DVjWIqoioliRrKGth0crCssEJFh2kav0b0aYRZpl1lDVG2A2Dqe_ePS5KJ3excy758xot17j8MOw-CfDoq0HPzHA4hTmbJK_p7GP-QnSXGDDvgo5Tx-Z0UjOdlLe7YvzGbnP0Kzanm95hAGkXi9mJVN8mTCbpAtvqjsjXMqplaKemE1kIvfTFjIGL_eG1N1P3bEZgjmKOh-6M3Abh-PQUPWHHsokmlYi-89pVplcNRzKigmfmUwmNT68F5_AXQkTTxJPIn3znk6k6V51CE9V0WO5KD_PNUzu6iHVnbyc0tXXTj=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/eLirwhHvl5S1tF5o2BxYygwFD5i4DYNwjm1YEIH9aIVQ9DxLE9ovmOuEQZYhGA-RfYG_sC5V00uLvODpaTkPkhgvHGGFqXW6AEgDb9s_M0SUZsUu128M0QIxzDAudUEFysujgyy_aNodRAzjpcwvXRFOdUOQwGw-6_HDCz4kR5MXVQMpzuOomgU1b6NxqK_ssMfGtAV1MiVF29oNZeD1Ky2-ztMHgE6pLuCMnnhi56xRS_P-TBnmlhlNgW_ltN141DzgFSzULLCIrs89lHdqhVfs-TzFmqIyRjrGI7TRsPyYcIhjoVVOzNmy7Zl9UphBSkEc4MTn6Fy58P5M3LQ8E3wBk8i4TL5xopZ5r_EIdBID5hsGYMlZ0pDfp_2hhA49YvS__V75eLJs2UdmbrRMxmT5YieznxnHNCKRgOJuy6jbDxPPPiHJBdANgFgB8v9I8PSgMt8Vj4kY9TZYFXBOWrn449Im9I15U7_-ivQTJ2LXx27le66XV6KhlV1TvEj3L4rAe6diBHhiWRX--1i7eCRLQIBvx4j3z3FL5uFk2TnLxvDgI_3O7ZiJUBeBQgdW6nypFGOyyniZVULLi3v5CF96p4g_SSK8VO3QfpKAzYcrnHeCQdrVWSm5kTeAxTkF2gsQgaKJerE3m0WIeiJbpEZFI9tPEEuqA7uTCUea4311glmNY4PlXse-6AIL=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/eLirwhHvl5S1tF5o2BxYygwFD5i4DYNwjm1YEIH9aIVQ9DxLE9ovmOuEQZYhGA-RfYG_sC5V00uLvODpaTkPkhgvHGGFqXW6AEgDb9s_M0SUZsUu128M0QIxzDAudUEFysujgyy_aNodRAzjpcwvXRFOdUOQwGw-6_HDCz4kR5MXVQMpzuOomgU1b6NxqK_ssMfGtAV1MiVF29oNZeD1Ky2-ztMHgE6pLuCMnnhi56xRS_P-TBnmlhlNgW_ltN141DzgFSzULLCIrs89lHdqhVfs-TzFmqIyRjrGI7TRsPyYcIhjoVVOzNmy7Zl9UphBSkEc4MTn6Fy58P5M3LQ8E3wBk8i4TL5xopZ5r_EIdBID5hsGYMlZ0pDfp_2hhA49YvS__V75eLJs2UdmbrRMxmT5YieznxnHNCKRgOJuy6jbDxPPPiHJBdANgFgB8v9I8PSgMt8Vj4kY9TZYFXBOWrn449Im9I15U7_-ivQTJ2LXx27le66XV6KhlV1TvEj3L4rAe6diBHhiWRX--1i7eCRLQIBvx4j3z3FL5uFk2TnLxvDgI_3O7ZiJUBeBQgdW6nypFGOyyniZVULLi3v5CF96p4g_SSK8VO3QfpKAzYcrnHeCQdrVWSm5kTeAxTkF2gsQgaKJerE3m0WIeiJbpEZFI9tPEEuqA7uTCUea4311glmNY4PlXse-6AIL=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/XS6GiEYEUZyWx-oSP3PrePydbubJMpnJ0CpQ2ZP_iv5m6fOezjKug6RXFpBP3BsMdZ6VurBFUQgVdgYoypF63F1yskz_NOgTdTxyS8TvHEa6QFAk6GGggL3pd9dWrsjtxugfhuVU6gtIESqXY9_xvyeOznmA-El4O-u31fh0uNW_G1dS6LDBLlUSoTtGthYprFDRVt8AnoLUXUlzoNOpaXAGLds0-tenwnApc_WthG4_dYu_fq5UGevjweOZ-s1y-mUw2oLF6NAR5O2gQQxggMUlZMEP5tt8mR6pEws67P8rZipQOdq2N1AHKJoWo0a2jGPTF-qiM0Gws_1d8sJ_sUKo5YTJe-wF4uP3OW3IpzojTZ7mh900s5qtCxaSZPE6lLjBVZyp605CkvGjypL5IfZjguBYS14qAj35tOdrmwYvMNPWGfFFCpbXloAv_95_j6TX7rdFy7Aw9EC2hs4f6Okxyr8fNpLbM7889bm9PYCBtFIA2UPZEEMkBgoqMuDgULQZHFev6Y8U7IqDf1Dy4h4ByPrhap0MO2Syhs0vpFr52eIxrpD9wfPFCPs_N_RU9bYKibv9AxOzSLqeN_Ql3TE_LZOh2Tvgh9FnBxR824zlvuwDSm1hXEmFkUxSAFJJwOlACMRPts7rCuBRCqcBpSupi7RiaxcU6m436_O3ENbbrxVHX9LdxobkrVCp=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/XS6GiEYEUZyWx-oSP3PrePydbubJMpnJ0CpQ2ZP_iv5m6fOezjKug6RXFpBP3BsMdZ6VurBFUQgVdgYoypF63F1yskz_NOgTdTxyS8TvHEa6QFAk6GGggL3pd9dWrsjtxugfhuVU6gtIESqXY9_xvyeOznmA-El4O-u31fh0uNW_G1dS6LDBLlUSoTtGthYprFDRVt8AnoLUXUlzoNOpaXAGLds0-tenwnApc_WthG4_dYu_fq5UGevjweOZ-s1y-mUw2oLF6NAR5O2gQQxggMUlZMEP5tt8mR6pEws67P8rZipQOdq2N1AHKJoWo0a2jGPTF-qiM0Gws_1d8sJ_sUKo5YTJe-wF4uP3OW3IpzojTZ7mh900s5qtCxaSZPE6lLjBVZyp605CkvGjypL5IfZjguBYS14qAj35tOdrmwYvMNPWGfFFCpbXloAv_95_j6TX7rdFy7Aw9EC2hs4f6Okxyr8fNpLbM7889bm9PYCBtFIA2UPZEEMkBgoqMuDgULQZHFev6Y8U7IqDf1Dy4h4ByPrhap0MO2Syhs0vpFr52eIxrpD9wfPFCPs_N_RU9bYKibv9AxOzSLqeN_Ql3TE_LZOh2Tvgh9FnBxR824zlvuwDSm1hXEmFkUxSAFJJwOlACMRPts7rCuBRCqcBpSupi7RiaxcU6m436_O3ENbbrxVHX9LdxobkrVCp=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/nHNdDXsfwSdOvhpC174Xv77wVKwUI81jWnlNa-AlLP6tQqZXsyxDp8nkp2R1xh30dM-6vePSUVUgW5cd2naje8oiFYh8mj8ZFgPzlyofoIW3tuOywJvcg4nLRbniNIXoL5Z69vYFxCskBHg8Uwz0fnhHM0Uc5XM57270ozmpI4_cmvECS0-XWpz1vIHJ1InExsm-K3a3rQzYWqSgTqLJhzLKxYiwiQiwja-vCLml4RMZ4o3PhjGikFzVMti2KTExFXGhAvxH53VEz1pmbFzOmoPxE2xqorhobvn3RpDxKFHsS19M6FzzYo22KTVAaMkh0i0MU_nZnr3SWEZAOTMLNCM3vjl15GXT1KSBt4q6D-k6mYzJawXo1QuIwYv6oOzsyCDW5CXwhJB87X-asZf0uW9yWabnINXZIKcwuqH1MH8wESPZxW8Ru0Zg0JkP1XvX6PTaWv0hqzcWXjtmaR_pcEXljOC_h7utP4cS_3GUvp-yRjnCqcO42ZKiELptFmpPniAlRYj866l-twTkbDqNPQB1DdTlYmysrsyrwmXnMLfV0Tx4LU6w_Z_Oup45Y87pPwbR3RMVT0EKgxHJDilSPVyB4fDx6XHtoDKkp76_W2MY8Wojw2TXia6-0la_XH7tfcaNClQU-C80J3ba1m9PFLKEvu_MFUteDl2o0R-Hh-iwsS4KUVdfTIphJ7f9=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/nHNdDXsfwSdOvhpC174Xv77wVKwUI81jWnlNa-AlLP6tQqZXsyxDp8nkp2R1xh30dM-6vePSUVUgW5cd2naje8oiFYh8mj8ZFgPzlyofoIW3tuOywJvcg4nLRbniNIXoL5Z69vYFxCskBHg8Uwz0fnhHM0Uc5XM57270ozmpI4_cmvECS0-XWpz1vIHJ1InExsm-K3a3rQzYWqSgTqLJhzLKxYiwiQiwja-vCLml4RMZ4o3PhjGikFzVMti2KTExFXGhAvxH53VEz1pmbFzOmoPxE2xqorhobvn3RpDxKFHsS19M6FzzYo22KTVAaMkh0i0MU_nZnr3SWEZAOTMLNCM3vjl15GXT1KSBt4q6D-k6mYzJawXo1QuIwYv6oOzsyCDW5CXwhJB87X-asZf0uW9yWabnINXZIKcwuqH1MH8wESPZxW8Ru0Zg0JkP1XvX6PTaWv0hqzcWXjtmaR_pcEXljOC_h7utP4cS_3GUvp-yRjnCqcO42ZKiELptFmpPniAlRYj866l-twTkbDqNPQB1DdTlYmysrsyrwmXnMLfV0Tx4LU6w_Z_Oup45Y87pPwbR3RMVT0EKgxHJDilSPVyB4fDx6XHtoDKkp76_W2MY8Wojw2TXia6-0la_XH7tfcaNClQU-C80J3ba1m9PFLKEvu_MFUteDl2o0R-Hh-iwsS4KUVdfTIphJ7f9=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/RC8SaHx3x_P2_t8iq86xkNWKyoPksTseRN88PAoDKdRmcptTb6fbJkVwOz7hKmPJbuy_gVJMqM6ywK-Jc3zI8--4gg9UbSk7kn-YAE7XSkNsvE5J8aajCwYdzJ6uRwEzR1y5OxvfSOJB-O8PpPLoEW6QJ0bsoKRbCzUoKXD4pkGhOYe53lc1G8tvmLTaqfLXGGRRvLxMcBkmNNtuOrTGGuoZjP1ms6GOUyagEcUZxevzSMGw6jlEuU0oluSN0MJ1V3cP10FeX5WkNeJvSTIvmGbVEnCOSMVgn_Q5n2f0oNzyfldPWd49tq8hqT8s4qTKX-lwCPzEIU0bMs2HhZ_wOFPWALKQKxhyz8cLbK_3orsLBSMuCxcCbWPNNDP9c64IBtP9boPPJJe2wuY4H7R1Pd68YL-xE1rfBL0S5PxOiuwGKkrROAPT174HUlVrxm1hCe_SqUCbOPvVGd5PTM7K0Di5c-VQxVdtc2aASSgGfSx-QYYC4n35H7FtItmqJWMOt2ze4iw9m9lEgI03Rtbq_6-pJW1sFNWJW3OKrFk7v8FHByiiDP6G4yfNSpMmasgrL772eoovye0QJeNPwFDNxEOKdeSGKm0pYgJ2pA--3jOwCrzSvV2hZ_jTpkrCo9RBmpbhelR1HKUiZxnaJy34ItJmnAL5IYyttbDEcgtb3rlbIfWLJQMF817kn_Me=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/RC8SaHx3x_P2_t8iq86xkNWKyoPksTseRN88PAoDKdRmcptTb6fbJkVwOz7hKmPJbuy_gVJMqM6ywK-Jc3zI8--4gg9UbSk7kn-YAE7XSkNsvE5J8aajCwYdzJ6uRwEzR1y5OxvfSOJB-O8PpPLoEW6QJ0bsoKRbCzUoKXD4pkGhOYe53lc1G8tvmLTaqfLXGGRRvLxMcBkmNNtuOrTGGuoZjP1ms6GOUyagEcUZxevzSMGw6jlEuU0oluSN0MJ1V3cP10FeX5WkNeJvSTIvmGbVEnCOSMVgn_Q5n2f0oNzyfldPWd49tq8hqT8s4qTKX-lwCPzEIU0bMs2HhZ_wOFPWALKQKxhyz8cLbK_3orsLBSMuCxcCbWPNNDP9c64IBtP9boPPJJe2wuY4H7R1Pd68YL-xE1rfBL0S5PxOiuwGKkrROAPT174HUlVrxm1hCe_SqUCbOPvVGd5PTM7K0Di5c-VQxVdtc2aASSgGfSx-QYYC4n35H7FtItmqJWMOt2ze4iw9m9lEgI03Rtbq_6-pJW1sFNWJW3OKrFk7v8FHByiiDP6G4yfNSpMmasgrL772eoovye0QJeNPwFDNxEOKdeSGKm0pYgJ2pA--3jOwCrzSvV2hZ_jTpkrCo9RBmpbhelR1HKUiZxnaJy34ItJmnAL5IYyttbDEcgtb3rlbIfWLJQMF817kn_Me=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/WwE6FeTyIhCHjjWsQuQTD4ccuWZY6Ch9KTHDQp5tknC3OrJFNHRLrc0OHpdn49G_LFjsa22BS4SFEyW5YAxtGiQHt3Ck1MQJN54WV2WtD9q49C9iy2xRgymSVLn7632rbEi8cTIUyucywH8lvIF69hkFgtYmfaQzEP70aOi1ixCwD9XjleW6gH5n-G4c95TqfaZ-AUJ_PQq4JPbpRZTA3LUv7y6BXkDiBjTe0yZGkOkizSGBmCC-yJknd5TYak7IUGzIlREU6Gi_Rkh48hRN5N19T3CfCpeE_K8sm759OikUSBzL5Sf4au6hZWPZgYW0mqPDq-X7xwxSvtj-TX7FyvkzjwdYCEFyYxsoVckovKy6Wm0NV6IKT_hoJgcku-WZyy6aOokoyiX54bRdyZGSBWgGU2Y6ildN_L-INIhkxZgjkgXBUYav8G_PjkWm3LI4_kWgc6_bn2xvliiKzEy7cV5_jerva3zQBP2mCWkTZlMg5r9DjMYgTnjgO_uDgL1ue4MTGWrEH2v8shoXyb1D7eelUmIuKVn5-NKeLWlMKZxWgWuN9RFJ2DAZi9g-ZtW0CnElY8qSnqifDG_cLSmhJE5hUdwOUZGpf4St7ce_sWY7Euv1BGbYHmyXPntbdjeT5jmPALdceJrFakojstFkQ2br470pO9YYwEZ1UHsU2ynGTcT9Yla_L1OtS9dl=w244-h182-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/WwE6FeTyIhCHjjWsQuQTD4ccuWZY6Ch9KTHDQp5tknC3OrJFNHRLrc0OHpdn49G_LFjsa22BS4SFEyW5YAxtGiQHt3Ck1MQJN54WV2WtD9q49C9iy2xRgymSVLn7632rbEi8cTIUyucywH8lvIF69hkFgtYmfaQzEP70aOi1ixCwD9XjleW6gH5n-G4c95TqfaZ-AUJ_PQq4JPbpRZTA3LUv7y6BXkDiBjTe0yZGkOkizSGBmCC-yJknd5TYak7IUGzIlREU6Gi_Rkh48hRN5N19T3CfCpeE_K8sm759OikUSBzL5Sf4au6hZWPZgYW0mqPDq-X7xwxSvtj-TX7FyvkzjwdYCEFyYxsoVckovKy6Wm0NV6IKT_hoJgcku-WZyy6aOokoyiX54bRdyZGSBWgGU2Y6ildN_L-INIhkxZgjkgXBUYav8G_PjkWm3LI4_kWgc6_bn2xvliiKzEy7cV5_jerva3zQBP2mCWkTZlMg5r9DjMYgTnjgO_uDgL1ue4MTGWrEH2v8shoXyb1D7eelUmIuKVn5-NKeLWlMKZxWgWuN9RFJ2DAZi9g-ZtW0CnElY8qSnqifDG_cLSmhJE5hUdwOUZGpf4St7ce_sWY7Euv1BGbYHmyXPntbdjeT5jmPALdceJrFakojstFkQ2br470pO9YYwEZ1UHsU2ynGTcT9Yla_L1OtS9dl=w244-h182-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/B9xKAk7BO0gtiJBJNbaTS31shSMnIDy_aMrTGF6m0J26uXHYfuOV5lbirQH7_3p34wRr_r5gE5at1uvLimU6UU70PX7Zix5ckWOHomobc4Pq7Y8XlMgPq3Z6pKwA51e0KwlyIT4IJVk3NcAxpIUpMU0P74fyTrBPSfjPI6-dLbpfMe1pI0OiU3V0My2CPvrTOXHbhqz7nB8qYK__oEzDf6k8ab3RCMIellkr-Bw1rT9pcqaGNbDa3AQl6nN3rSOB91Qdc8fYKHsUypagdqVF2txh28HIwTuafg3t23U5P3b4a1X5W1-cTwxlkDJgPBlyitpIX8n59MBBI5YfUSBrNs-Jrk83fBg4cSQDan_i053nMx0mBaNI13rTv5Xgk2fFHfZDZgkUBtpTfORn21pkqtbtFD1tiqCRgGEudY2eafv0iv27A0VvcrtolMXXQFkgs9idJXYKCByxHTeuk5L6SoUXqL2FKa8wBfrMFKWQeg3b4etpPXlQha9gPdE5q_G6bU4C7sYbU7BxBLExFqDPQxJNI-LHykuwccTvp2cUY6drSoCLE-PLYzZx1eIICbKcFA1fYPHaccnwPQdIoGgjNUM1gQczDJJhVxF8-exOm6yKHo4Grbqiao8XaMhwUQ9MtPPqq-S1fN_XXZsrhzV40u953HhxzCGkDhe6OlR4hgUxcrLnHRT0IianExKE=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/B9xKAk7BO0gtiJBJNbaTS31shSMnIDy_aMrTGF6m0J26uXHYfuOV5lbirQH7_3p34wRr_r5gE5at1uvLimU6UU70PX7Zix5ckWOHomobc4Pq7Y8XlMgPq3Z6pKwA51e0KwlyIT4IJVk3NcAxpIUpMU0P74fyTrBPSfjPI6-dLbpfMe1pI0OiU3V0My2CPvrTOXHbhqz7nB8qYK__oEzDf6k8ab3RCMIellkr-Bw1rT9pcqaGNbDa3AQl6nN3rSOB91Qdc8fYKHsUypagdqVF2txh28HIwTuafg3t23U5P3b4a1X5W1-cTwxlkDJgPBlyitpIX8n59MBBI5YfUSBrNs-Jrk83fBg4cSQDan_i053nMx0mBaNI13rTv5Xgk2fFHfZDZgkUBtpTfORn21pkqtbtFD1tiqCRgGEudY2eafv0iv27A0VvcrtolMXXQFkgs9idJXYKCByxHTeuk5L6SoUXqL2FKa8wBfrMFKWQeg3b4etpPXlQha9gPdE5q_G6bU4C7sYbU7BxBLExFqDPQxJNI-LHykuwccTvp2cUY6drSoCLE-PLYzZx1eIICbKcFA1fYPHaccnwPQdIoGgjNUM1gQczDJJhVxF8-exOm6yKHo4Grbqiao8XaMhwUQ9MtPPqq-S1fN_XXZsrhzV40u953HhxzCGkDhe6OlR4hgUxcrLnHRT0IianExKE=w692-h921-no?authuser=0",
        // caption: ""
      },
      {
        src: "https://lh3.googleusercontent.com/rTBr1LsSzbj3HGqZF1HXD_SiFkfq_ASHXVzf_N46UyET0-uGZX620lgLtUujYfOWq54OnExzdYFD2MM2sJlXjrou2WV6kCBWfkEqP7ZodzcvaSUtGndGP_8J3nNcxpuoz6O_kq3H7-T72U1FyrNxyUZoeN8msCIqErDjb_sdpLl4WAwtnsirp3Bw-rTN5TT7nBflT6Te-je0A2IgYaWsc86VakW12HyHDNtSCD5XnfqU85CLKhrXWSS09P6FlxeQ3c5xCjG5kepzpNbhJYA73hcb8ythzlopxpSWAFjegJ0pNVPbFzJojgxS_kw2EF9rKVZniSfQ_-LUz5gS3ebhZdZhtbKpn1KOWz6KJvl7xfERhIL5OahiE8dzqCuoIoz1nRGkPUt49Z65RnLeoWAEcROoU5Nwd8EZ7Tu0TRLsIqTTleq31ALj-3CjDxDScWFD2DoIyCEb7oY2yVvfsNnntaHOub2TP51TmFTqvOct01VfKyLO39ISLcxABTmDnZt9VvF7clzXpabZdZYIw3913DDqfG3lwUC1kVwkJpcJZ5A9-DfvNuambnPIA4hv7yk0O1snmCc6jPTaixm9CaB7d-8NQInfKuDnikG_oWTXnOjAMlKTGySKbmfM1BFvfevU2TRzOfsP0hAaMQVkuFF6eiMYqJxrE_i7Iz3-YenveoyYQJH7RQzQt_SBsqYN=w692-h921-no?authuser=0",
        thumbnail: "https://lh3.googleusercontent.com/rTBr1LsSzbj3HGqZF1HXD_SiFkfq_ASHXVzf_N46UyET0-uGZX620lgLtUujYfOWq54OnExzdYFD2MM2sJlXjrou2WV6kCBWfkEqP7ZodzcvaSUtGndGP_8J3nNcxpuoz6O_kq3H7-T72U1FyrNxyUZoeN8msCIqErDjb_sdpLl4WAwtnsirp3Bw-rTN5TT7nBflT6Te-je0A2IgYaWsc86VakW12HyHDNtSCD5XnfqU85CLKhrXWSS09P6FlxeQ3c5xCjG5kepzpNbhJYA73hcb8ythzlopxpSWAFjegJ0pNVPbFzJojgxS_kw2EF9rKVZniSfQ_-LUz5gS3ebhZdZhtbKpn1KOWz6KJvl7xfERhIL5OahiE8dzqCuoIoz1nRGkPUt49Z65RnLeoWAEcROoU5Nwd8EZ7Tu0TRLsIqTTleq31ALj-3CjDxDScWFD2DoIyCEb7oY2yVvfsNnntaHOub2TP51TmFTqvOct01VfKyLO39ISLcxABTmDnZt9VvF7clzXpabZdZYIw3913DDqfG3lwUC1kVwkJpcJZ5A9-DfvNuambnPIA4hv7yk0O1snmCc6jPTaixm9CaB7d-8NQInfKuDnikG_oWTXnOjAMlKTGySKbmfM1BFvfevU2TRzOfsP0hAaMQVkuFF6eiMYqJxrE_i7Iz3-YenveoyYQJH7RQzQt_SBsqYN=w692-h921-no?authuser=0",
        // caption: ""
      },
    ]

    setImages(IMAGES)
  }, [])

  return (
      <>
        <div id="timeline">
          <section className="headingMd">
            <p className="headerText">Our Timeline</p>
            <Timeline events={timeline} />
          </section>
        </div>
        <div id="gallery">
          <p className="headerText">Our Photo Album</p>
          <div className="gallery">
            <Gallery images={images} />
          </div>
        </div>
        <div id="blog">
          <div className="blog">
            <p className="headerText">Blog</p>
            <p className="subtext">Coming Soon...</p>
          </div>
        </div>
      </>
  )
}