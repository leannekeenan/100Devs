document.querySelector('button').addEventListener('click', showActivity);
function showActivity() {
    fetch("https://www.boredapi.com/api/activity")

    .then(res => res.json())//parse response as JSON
    .then(data => {
        console.log(data)

        document.querySelector('h2').innerText = data.activity

        let activityType = data.type;
     
        console.log(activityType)

        if(activityType.includes('busywork')) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/gOYPI8F6UmljvSsz3WTUROs7E-bPjdwh-df0XksRlHcZsen5vco-QKYackSdURX4E3GdSvuRuZ4lZtqTUoblkZ9DH8xCye085NQdBjeZjGBWoGHn7Vtq4IBNUT3bVbMbuunuDcBzvf5Gzu3-fpRKet-Q0VRCuoySQrnRPuvPz8tGEOtn8NHN4OXHTibK9F3xM6CZtTAt_c2ZsvDHhjjCcZz99l7toY4mO5UzhKl8I3uK0rIAPXrTWLffrrKkV3iwtiHg9Wyfgumpm3Fnn8psLB1FVILouvurM6Sl1BtMhFdq4qr48cvrj6HnYhdhO4nfLIts1vEbNxEPY4X3owHSEVGHjRA_TjEymjFz4EbQ4qi_OfOyCK7gQZoeohNq1RBMhJx8GIl-Dl3EV7Cge5IGVQ8uX9WX-3dOu8wCreKm4SdUcrevHS4PINkzs0_Pd2OIIu7VmO-mnBx_64w8ti7uIcyGBbRqd_G29HVjNAGVT14UBAEM_uNNzvxuOCjTgPUtpnmNNwyNhYMhoVNU2bV2ZlQ5ZzSIDVgwl3w1U18OWTd5w1HR6ba4tULb3BdhbX2-NvHHJE9YHjUmvwr-4cook44SkBrbAL9IFlF544UWuTDYiiomo3Njg7AdRINSHoxiv5bpO14f36cnl63RNgbaDN5HXcj7cfOkVE0AuvhZibaU2yW1hMbVkyyJsHqMNEHZivIwuX3qwuce5aSezSHtrp4DyEln_OMV-C8EreIoH5Qdwy3eYcchDO3kBEFdCJRDUaxIgQhPMvOMPav4DtNBwCXSAhDtPcBIMXm8lFapIYXBod6Asck_m5VPToKFZUJAx0u6lbjTycxzZS1YjV9wMM52h-uarqYGPMxqnpKLP6RJRlhyAkYfWYt8swxMinybQ2vjI77_MWdgxYBglu_zpgF9Ns_Jb1O2xGuww1s1IrXM5Q=w200-h200-s-no?authuser=0"
        }
        else if(activityType.includes("education")) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/HId2EHV9aSkzmOvCDD7PbmfVAf7iJmxCE6lHpEiKdtQD4yE1TZs0RCdJHX0rEy0wYD8-zBmtcokErdvvRuT80ZcYt1XWeT7-b1RzvFQ7cNzs-OKmviCceaNl8CAoZcgRPZL9q3dcA7DXxinHjyf-0gpz3mm8UI8cKk1CJHKWTVSVTuk6H04ZcnTG53arnPjz6UlspAlcDzOe4-81_ZnHt-seaNSD_YB5iEoSy_gchh4B1bIcY4MGNfSqtHXKdvkqOO5eA5cP5YXLigcKqOwBT8TpYzRBy5IyKxvmECuoxCW5QPSwGJba17n9j2it_-hLeTBddRDTUvL2Xd3ndxWYOjxJiKU4OQ6CmdJZqKS9Y2N0yAPAyCbaos1DY2al5S0rcrRfPSPMphKF_jeeNEITjwNAi8NjgHh0tuYC3te1kEo18JhACYGlnjQjNBJvO-zf9Eup1Nb3vOS5UKB9muE-Mdsx_l0Mx1Lq50wCYHh7Q0GS9rDA7D9AKEhZv8pbLzjOi9YNvoG-hFtKwgK5TuWnUZJ_NcAJ3MCDF5dIRK8GzFPHXZDF9xTFDrp1DynoI4_9ofiX4C8kJyehACfQx6TB-ez_PI3X2N7b9ODRwOGEmVKuU-JvhLCuLpoQ6wf29nnrdqSBwPe_cPgYu1J-xXZXMLwcXpjBvN9i27VML2DXtjpYvbN0whk-OTtyhmLow-Oo1v2U6Lbeo_W71MboLXQDGxtabZKUaT4K-GUWnBdutu-ZzhrQL3KeQceLAvJZ3UAtpILNK02_LXRVBsBWMW6cr7ZZ0s1Qx_gRYPPzjS8L0mAYEu7EOqI3oWT3p2DcEEZJoUo9Z40xGh0pvXtFSU_MwtR6xbwerY32dF3Je0LylXrg_Vn8uGjJqXKUoXjVess3FufCweQM6NPGjP9ZNZaySXEa7OdCAknTjzBqVisrN-Dzjg=w200-h200-s-no?authuser=0"
        }
        else if(activityType.includes("recreational")) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/wLf1nXUs4p5dkLVqJXtTLUPSJe61FM7O0RNwftj1gysfrfW2XJxfJu1HD6tKYzsfCHSp1_cdtxZlsVRTP9zJKAtCI1FcwWiTJeNQLIB3nPIIuewBXB2EPx5ePvpvibrS2SEgdqBoVv7twUckV9Jkuws8BS9VWc4DCqczvFqPTpePfLW_TFq1PTpNJIr4fpIKgRrl1WyVrp906OQNuWZOzmgQ6jYfXbgTlmk5f_ajbCm0XjxhWXR5VileRPO2aaSt3OGX7uDTw52ZrRz8f5KZH9YanwWd-f1dNnE_VpeqWGtOXyCqWK0ip9VXC8HEykgiBqmqHlT9HSorXXpHOZhuPJlNMMeNYXhnSiSj_C4p2Tk1xLDZ6OcKKRrlkjFXsmNAZ6AXkK3MUHuMcVYXLYAC0Uonkz-OpAuc6MY2BfLPBfCDGTpS7OqAUbgK3WMIhq1ys_sXATk-9pHo4cPa7MuYWcFkjjv166AoupQeoM__BFVsrmU1FEAoamptTkhyLRY0BRITWY_Le1IHX70OnNQlb6-13PeF2XD1LXfYn0Re5MyXlyHaLu9WuUoXOcVYBWPFF9m6jAM3RLkry93t-y3pBCezfR6MHvgaZEoHu_yHK2ocm3kGSXL_03nVEnt6rx2_MApd6EotfwYbJJHDKvl4pnUOcnA3sBt5IIj-3-ONW_URxkUw8a95Jap9HcFFzZnIWLS8QipMu-bdw5ZlTrdXBxPH70uP33spqfWfMmBcewbhPmWPOL9FO57pwcQQ4vtWYqgZOieuJLis_axx_gjjtTGupTy3y_6ZFwegxgPqKCj87hm-Df5VZ2SuCQdAtEg3oPU8-qImwZOCaOATLFwn9e6bGLZ4VIz5Yn-xytFkAdf5NDRjoTdK3pkgHH7rKlsZyiZDgEEEJ7NG0AkHsM3ynfbs2oJ2uH8XIT5UhkvtPmIzjA=w200-h200-s-no?authuser=0"
        }
        else if(activityType.includes("relaxation")) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/yFLVV_7RgVVzaUYuo4X2VAF2n44Z19bCP6lIbuoZd68c_8M-hjdxKbFkdqhXcrmUUs63w8EIfHq_Mr5PAVuznGZZLqsdCV_0b4bnOdz7gNhfIk833vX3geJ-BcNtv1HlktdcJv7ACFW6kBCyLfo0ayTYWT6L0MBhLOx8cK9pYOr7ybfq_7EnSDTcUlsX-IQ8E6NugIYV1LmYGbIInvr8GnYnD3IMXk5c5aYCltps5nYH3EgNOyAzMXTRt5uyJJA0u36ScPnZhyETsXUs-eWN9GgKUN257corNB4LtMnGPOb-8BVCuBQDvn2JbNtKg6QcwPthkKQ3-pYlz70rpadc3qALA-A6HC5hgnwSJcovzdY7pGR3xHKaLeaMAmAAgnEKuMJIJ91nx5_EID41PkAYW5d84IJARFhHlIkn5S4XkkOKKLV0srRStZp1DGpxJP49JdT2BLejtCw1tgPyYTWpT0COiifOB_QKR05VX3-mNHIr7umnaSHpJtpmn2OsLr8M7qpGI0jlqkToUECUg8kToRoNsjFz_PdhUaD2Hl35-PKMsHmD9wAfRycSDUOC59vB9B9oKAlT77wTmQ77kW6ef2NJrWZ6SL0ceJtMQVKGIYfCFpyNngsiBr2A_vLMsGaOrrY2wLvCS4ORVw8D0vH0zSYtH8Z6VFds_a0Hh53PJmHqG1uvZ8dWeD2ROI4RyJPIasoB0208Un54bAq4Aa89uStkfbxtF3OQZcjeHZcWYoxIYsanhJck4QiNWw3gCcne7V4xQC3bUic-Xw7JRr2m8ZlMfBV-e9bHwIAg3jCFdMl-gEyfsFceoXBXZq_z_qDbD3SUxlh_BEvU78wTl8bnQWsF0z8ZHHBiVQikEUd0EzD1OF1VeFqhkbAZyjlWatA5TgO-rmNPKIUcv0HufecfNtYL6YnmaGKON9tO_n9LDF6v2Q=w200-h200-s-no?authuser=0"
        }
        else if(activityType.includes("social")) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/Q-DdKPu5n_NCThCbWnjE4DpOYXq8TNU78TS38PotbuLwmS36yX894Z5xLxrFbNwJnRFQbW346hV-fGR-wSUwgWbWb556yqDyhOL9rKQEI5pcmxtFZ3gWSL7j6wsmHzEXt87SoOe1vrt9flthO6UxM0E4kiUYQaFQtGUHFNBXaJHONFu6lJqm-wXBrqvdTNJh8-zj8ZTRHfIyYmBRJ1xq1glyssm31cigkhsK1hU45MmSfk5Th25aSZ8K_9lN4pf0r_LOHqnVhqxuvD0O8wW6xB73D0epPNWG3EsRKettUBsa08ssgV1mm-Upd7-Pxx8N9dg1w04kqX49enNA9E6yWDoS-PQoRlRo3fdjVLfwGAJ5yqGg3FzkzyP6mpfl2zq_00XhKmwD45_XBccZPoXV74Ukh1Wsg7sLEFI0MngBgLIli5CMwNfSm0rHY6cOHp0odj6WNjlIjkqpPIM63a6V0vdu0UMSS_9vVzuDDvBjZGT4-LPP2qykL29MOVURt1SRlak0wJJG4u8xWlQbNY46fhJLZXW3Zn8SlZLln-Lh08F_JMe7SC0rxX8c4TAF1RMHDqWzs9_XaBfM_OhnlGSop0rDR6dnnhVa10j1FRQDI2HirU4aBJ1IDrsKo1DGC9QfWhfdRuZoJOxd2qcbfjibNrGbjiY7SAPOulF35dR0AgadkR2lRfa39E3Hzt614N3-U2s4yqpfCJzVv2p4OCKEljnJ-JupzDmNL3KI-3UyT6w9M8U5VFCPfUcckUXoaw09PwdVNTlWI1IPameEaFllunELoFdLVl6E7kNTTcifEZy4CUQLlY34Pznm5t4P2CubEKf58BUDY-SLIwVD5fyFaylkCqCM3OPJSbtZTeCM2PrFcRYuOTmyy0NNfDKBURcq9CKdQ7GkujWNvtn_tLqtp53KxZJ-siEhpLLV_H2dpevrcw=w200-h200-s-no?authuser=0"
        }
        else if(activityType.includes("music")) {
            document.querySelector('img').src = "https://lh3.googleusercontent.com/MUQ3BBJDNBUToeqKIBJw7ZCy3USrpO14xiDaszbRXk-1xGJFG6htoGhoyltCM4Q7Kb2w2ymLmeMlDiLYWdz_isJT95Gy6SGHpXfs6vaIb5rcvIpmmakpx66T53ZXpsJ5GFVoDHnkehmhXudkRYaoYY1k4_UZiAkhaniICDqqrcSCXvUWPHVj6OIDB2qeSW8UcWOo0WdsEi405eoi0N3iS2q2U3ZgLjdCkec7XL3_YGmxTMjaGB-IsUVoBrQbz3ehgz1AOgHjGrwTaFui8DWIMxX_9lOxlCeb_Ij-KOIGGtcQEYgPI2o3nkDRA1r-7NtEv0mvN1pZKBP_-0SdaR5NY8kMnvu3m9_3LOu9qyZZKWBqteBCb13SWlW1nTaO9V8WoH0CeexqgzkaTWIcf-BEKhmAX5KA5SDCAbqHDIQ1HNnI0EPyx2S8AHP72kBRQr213QoNdcaaMczFked9IWf3ASPc8mGCvnbmZdOEF9_QLFWwg1zevrthd3sQhxlPNCNNJummaE6SqvFdcB_iBRNYffw74LVscz7t7sa2PVTv5viAo-D7FYXhQQms1LrTb5s-DbcYEOZ8ifCmpAT4zDXZpO_CPLHLbqt8KNvVlEc2BiE-G9zdtgqrdiVFxL3F9J_QJTN6_lYzN12R3rgtKsNwnxzMU0Q0lOz7MyTndJXNAOfSXSII5-aIHMM6jNUR6njMFhqc63l-nyC4bxiO18FEKwd_pnmI4I8eaEw3Uzog_POz1HmAzk9fQFLDbE90W1BiPsV_AYQxxQG-X4g1S7x4X1X84szqP6NT4iXlRy_ioGth4taN4ijmxFWc_beoab1EVpv31j4Al5fcYnp7VgAWMmVhyTiyyqkqR_plyNZmqXZsOhbmdRSMMvlJAYid2XXprNUZGZnjO-NxSWXoGSc9HnyfU-IMVpw6M25lKb9jdMC3ww=w200-h200-s-no?authuser=0"
        }
        else if(activityType.includes("charity")) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/7eIWze44fkFsCOhTH7Cz5zlvmyBoF3HqvUN0RA0UsIMK6ftrwauQUfEs_6VOI9PgIpapsxq5Q91Emy1M_YsXNhmP7LAo4qDH4Q4DirFalgdMuAgj_eE1WAVO2nCyKA3XzVBFx-mNWyaiAM8OTZhEDy1sRM8C87JZWuP9r4gJClDDGayWwIx4FhDzQ7-qHo5mv8KNA_CbIbC0YF7jsiumsUx9hVhtUqJAcRtwmdvyi8ot7KU3AtWcom-JR3xru4eoLPAV1yh_CAC5erIFY4dTWXQH5_AOYjxHKCuoWle0oTH4hoXXKgFjTfCzJo0VxamMBbfnccDTIah9SGKQsIAuQPmLzNaP59xdhMg8tFmX8xwVTCLYRt3PhghMVjbhlweKgqYhaKa6k43MUQKyXPozb4_NpM1EsaI_TwBls03xum1KrqZcgJYAUOYgMdsN-n-HYhreVdtFth6uVZMTyg9o-uRslnKc_nZ7FD2tap8AANGL0EHtyNLoTmktpwgQX4wEaoqktriP-Ou-0UoBtIAz_HHPrYUa0GZ5nZ0cxEp3nGBu40cbvRgKMmNFh7sqMCor1Fa0u4c8jqm1Fk0v0D7sQwwmLCIpQlDcnrjUThG2nno6DE944n8mdfviAHYFBs9pTgMxh80gWXuolRmbBEmhzWmxV95IfTPKLYdRpJzrKlY_MSu7BxE8_SzCndlVei_FLmclbMhY-Cy3WDCTKAzXqCbPJ4qbuBeQLAgSdxcLNwKzFt1D6nSixC3jbrKLM1og2m6CbsHuiuNxnexPfuRx7Feyi0lbkbx-5F7S5Yz7EJWCH12K7e05L5a9sMw4BTsk_j6LbT6EQajiLjecIkuen8i18v21qbwq3VEUGlNl2HKL5uSn5x6gfcIgZ1UZO4CpJ2cV7_dNCqwm4FnO6j-DgvCBnqd89wGSHhyU2BtezSYyoA=w200-h200-s-no?authuser=0"
        }

        else if(activityType.includes("cooking")) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/966CV7rTi-CVOTb4hFTe5ACRZ0jMgD2zcKOFBOsUDVLT6nbp7FVoyiFn3uNa1mcujr6CvvKsg5nnjKq9tgj9wKKApkFML3ex7NTUoCakfTA2kbB8ogtbSuD7zVloMZRLWuQK09eGfzh1BEMtXfdyT2BI_e2P9L0I5W8dANvI04_SvGltK21XzrR4OjbGhWiOpjFWxORWiZEde5wiAUl2pPo-8t7E_jctL8snZEyK8pG0L40Vl4YdIWRhJP5FhbV4bDM0jxK8jt08mu1VPp1YuFsjx-KDPi5n7h76hRp3eyyrZ-FaoAJvXJH8vFQvDiJ5HZeOkbFGb29bXuBR7qxiUlDJ7jWWuDWP-WrVCqhyfHv-3uX4qBkwyCPlFxrEqv3ZujQdS7n_KWmrAFpV-5LxrFcVnrDtyOYbbXGQTITVA8eF7rBdheF__IXz02N89QgxT4c-vXpCh-Va0qSFHbKcxwYj3Sgfml8rPUCtnvBIAx93bZWn6HFG7q8rzkdczp5W4sFwTa1SRjaDfZUjmGaeAzuaaXiTELesCG2yPNRUWWYyu224KKTqAwJL56cKSiGLYAX4Dy-_iSZ7EsDM2op5wX2olM-o8KfgirlK_YifmtiPUa9trBdh1V343F4ZgzJ-lfhNO3XX3gdF_VXT1rHaSGY_-TWgzah-3jeqvaDfePXUmT9u9fMA7jFqsJN6fI2M9gr6DZds1jCxXh2IEtGGxzuZ59yZNqUpdJH_hzU2OqncwJqiEdcT9Q7oeGJlZesGvw3OVcSDOl4Vx2-SspI03bZMuRYPJgHJKu-sCqlxGMmHg5gwImRpbZhgrCGZknZ2f-jVRDdTvygjyqmL3krytYozKsFmZAlegZzj0o2NIFAuEhJEKa6eySNfckZisY9aidUjlDtqBqde5ZW-RinO5vTm2gISPt5vQX25J-6uYoptrQ=w200-h200-s-no?authuser=0"
        }
        else if(activityType.includes("diy")) {
            document.querySelector("img").src = "https://lh3.googleusercontent.com/Vq0pb72b2xQK_S5W40l53mufHWzRl4o6VVBUhD6o4XeenPqh6cPXSKr4TQ3Yc-wv5woysE3E3uKJsnnCa4UZGa4K_pS7lGfGxcJRnU1geQQznliKztkftxEKsNvESgj69BXLgTnldwPPq_IIkHmrSu5cwCJ3sJUutIWzgXk_peChASpnIVPXVfrF8w9vLtDxrbXiqr_tRIe4WE270mPToFoF4DxDJGJm-OsGRzrGxSbjyU0LBe5T9GSBCZ3rRMMxsvercP4KI5BYYja0j4BPbUVruptGAmqM1T-AbLYop61XgR_0Sy-e5COq3jS1yLNfryF6YyQQBm906IfSC19EiWDlO5zm8pFpta-YnQGUBzGruUjw31plGmkcZ2pJGDyfuHVQWB1Ww6lqoTP2ddGNaB-65bdlU9rbWOyuKzruZxRnGhoCszoa2ZI3Sn6cfuVORee2Q1HJqImxTO-B_Xt_I7fHFtHdLfHqIgA-e01CnICmRt0iRMExSbjmd4EP-TnIayr0C7RfCDX-fqgCOLjfASbL2zoY_3HJKzz8GnR7jLIxbV80LX5ypN9dm9nIsejDrF5hUGEubxJiHJEarfwDUsfGo8Q_SzPk7--rmabhlONKm0lt7BJcB3gj7q4qD7hMGXVhfC0o60N4aVVvIrwWjQTMaX9HVivSOvHy4FNfV_LnJK1CC9OdFBuiouMCztIYo3Yf2gjqlmGui2g-WALytefJcgs8ek0C9rtf4_Waq72_abss5Ock851tjsx-2qf8k8sQj7uvEukof2Ds_ANxrn_7pjFFtaZB6-0c6bGK4yaHTQg1sVdsnT5gKJiewGj6DZvlPF8yixSERqWA5fd9lKz6mapkI8s66u8lRk0oQgDEL41Fw_gAd-VHVyZBIywmTVfpwjbwMDs2aomKUQvImGZywfIePP2gd75FAH9b9aZLjQ=w200-h200-s-no?authuser=0"
        }

        
    })
    .catch(err => {
    console.log(`error ${err}`)
    });
    
}