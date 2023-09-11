import Products from "../Products";
import 'dotenv/config.js'
import '../../config/db.js'

let products = [
    {
        title: 'Notebook HP Pavilion 15.6" ',
        brand: 'HP',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/computador-portatil-hp-pavilion-156-pulgadas-eg0500la-intel-core-i5-ram-8gb-disco-ssd-256-gb-plateado/p/196786419003', 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/informatica/contenido/HP/196786419003/img2/04_galeria/04.png', 'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/informatica/contenido/HP/196786419003/img2/04_galeria/05.png'],
        description: {
            Text: 'Stay connected and productive with the amazing HP Pavilion laptop! Incredible performance so you can do more and enjoy entertainment wherever you go. Exceptional entertainment brought to you by its micro-edge display and B&O audio. Modern standby connected so you are up to date with your email, calendar notifications and more, even when you are not using your computer. Long battery life and HP Fast Charge technology let you work, watch, and stay connected all day. Find yours here!',
            Screen: ' HD (1366 x 768), de 15,6" (39,6 cm), BrightView, 250 nits y 45 % of NTSC',
            Processor: 'Intel® Core™ i5-1135G7 (4,2 GHz with technology Intel® Turbo Boost, 8 MB caché L3 y 4 core)',
            OperatingSystem: 'Windows 11 Home Single Language',
            Storage: 'Unit PCIe® NVMe™ M.2 de 256GB',
            Ram: '8GB DDR4-3200 MHz (2 x 4GB)'
        },
        Price: 510,
    },
    {
        title: 'LENOVO 14"  IdeaPad 3 ',
        brand: 'LENOVO',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/196378007380-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyNDI2NzZ8aW1hZ2UvanBlZ3xhRGRrTDJnek55OHhNek0yTlRreU5qZzFORFk0Tmk4eE9UWXpOemd3TURjek9EQmZNREF4WHpFME1EQlhlREUwTURCSXxkN2NhNTAyNjNkMGJkZWU3YzFmZDk4NjhlMWI1ZTc5MmE5ZDc4ZDQ0NTE3YTBmZmNjMTZmZmU0MjE4NDFiYmMx', 'https://www.alkosto.com/medias/196378007380-006-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyNzY1MDF8aW1hZ2UvanBlZ3xhR0ZpTDJnNFlpOHhNek0yTlRreU9UZ3dNemd3Tmk4eE9UWXpOemd3TURjek9EQmZNREEyWHpFME1EQlhlREUwTURCSXwyMzg1ZjJkOTkwMjEwOWRjM2NjOTE4ODYyZWQyNmQyOWFkZmUwZjk4YWEwYjcyNjBjZWZkYjIyYjgyOTNiOTcy', 'https://www.alkosto.com/medias/196378007380-009-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxMDM4NTF8aW1hZ2UvanBlZ3xhRE5pTDJobFl5OHhNek0yTlRrek1UVTNNekkzT0M4eE9UWXpOemd3TURjek9EQmZNREE1WHpFME1EQlhlREUwTURCSXxjNThiMDZlYzRhYmFlODk3NmYyNjg0MDU3NzNjODI3MWFiZTRkMDY1ZGFjNzEyYWE3YTUwYThmYzZjY2ZmMThk'],
        description: {
            Text: 'In the blue LENOVO IdeaPad 3 laptop, find all the performance you need, an affordable laptop that meets your needs, its generous combination of Ram memory and solid-state storage is perfect for your daily tasks, hand in hand with an extraordinary design, this equipment will exceed your expectations. Likewise, it will provide you with superior entertainment thanks to its Dolby Audio sound, and you will feel safe thanks to its privacy shutter on your camera, when you finish your meetings or video calls you just have to close it. Take advantage, take yours now!',
            Screen: 'FHD 14"',
            Processor: 'Intel® Core™ i3-1115G4',
            OperatingSystem: 'Windows 11 Home Single Language',
            Storage: '256GB SSD',
            Ram: '8GB DDR4-3200 MHz (2 x 4GB)'
        },
        Price: 485,
    },
    {
        title: 'ACER 15.6" Pulgadas 35MS ',
        brand: 'ACER',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121378164-002.jpg?context=bWFzdGVyfGltYWdlc3wyODk2MzV8aW1hZ2UvanBlZ3xhRGRoTDJoalpDOHhNelkyTVRZeE9EQTNOemN5Tmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpjNE1UWTBYekF3TWk1cWNHY3xkNTdjNmUxZjY5MWNiNjE4N2ZhMTYxYzViMDQ0NjIwMTIyYjdjZGNmMTkzNTBlMzQzMmEzMTZjZWExMWFhMTM4', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121378164-008.jpg?context=bWFzdGVyfGltYWdlc3wyMTI5NTZ8aW1hZ2UvanBlZ3xhRGRtTDJoalpTOHhNelkyTVRZeU1UWXhOalkzTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpjNE1UWTBYekF3T0M1cWNHY3wyMWI5OTRjNmE5ODBiMDY5YTNhMGZhNTFkYzZlY2FkYjJhYzAyYjRhNDAxODFlNzg2ZGIzYWU1YTU3OTYyZDMx', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121378164-005.jpg?context=bWFzdGVyfGltYWdlc3wxNDU5NDd8aW1hZ2UvanBlZ3xhR0kxTDJnME9DOHhNelkyTVRZeE9UZzBOekU1T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpjNE1UWTBYekF3TlM1cWNHY3w2ZDYzNTZkNWVlYTZhNzk3ZTdhMzQ1MDEyOGM1Yjc3NGNlZGU5NjE2YTI1YTZlZDEwMjBhNDZiNGMyOTdlYzM4'],
        description: {
            Text: 'ACER brings you its line of Aspire 3 laptops, a practical design computer that seeks to offer users a device that can be easily transported. It also includes an ergonomic hinge that allows additional airflow from the bottom of the laptop. It also offers you a useful range of ports, where three USB ports stand out, including two USB 3.2 Gen 1 and one USB 2.0. You can also connect to an external display via the HDMI port when the occasion calls for a larger screen. Get it here.',
            Screen: 'FHD 15.6"',
            Processor: 'Intel® Core™ i3-1115G4',
            OperatingSystem: 'Windows 11 Home Single Language',
            Storage: '256GB SSD',
            Ram: '8GB DDR4'
        },
        Price: 430,
    },
    {
        title: 'HP 15,6" Ef2524la ',
        brand: 'HP',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497269369-002.jpg?context=bWFzdGVyfGltYWdlc3wyNjg2OTB8aW1hZ2UvanBlZ3xhRGcwTDJnM05pOHhNemM1TVRRME56RXlNVGsxTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzBPVGN5Tmprek5qbGZNREF5TG1wd1p3fDhiOGU0ZGRlYTk3ZDNiZWFjNmUzN2FlNDZlZGFmZjUzOWE3ZWQ2YjQwMDZjYWNmNWY5ZmE1YmQ3ZGVlYmZjZjY', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497269369-004.jpg?context=bWFzdGVyfGltYWdlc3wxMTk1NTF8aW1hZ2UvanBlZ3xhR1ZqTDJobE5pOHhNemM1TVRRME9ETXdNVFU1T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzBPVGN5Tmprek5qbGZNREEwTG1wd1p3fGI5OTE0MTE0MDQ0N2M4MDhmN2VmNjExODRlNTY0OTBlMzBjY2EzNzk2YTg1YzQzNGQ1N2Q2MDYyYWE5ZDQ5OGI', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497269369-005.jpg?context=bWFzdGVyfGltYWdlc3w0NjEzNXxpbWFnZS9qcGVnfGFHWmhMMmhtT0M4eE16YzVNVFEwT0RnNU1UUXlNaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RjME9UY3lOamt6TmpsZk1EQTFMbXB3Wnd8ODk5YzIyNTE2OTFmOThkZjY2ZmQxZDgyNWY5NzI3NjhiMjQ1OTA2NzVkNTVmYTZjYzk3N2NhNjNkYmEyZGI3ZQ'],
        description: {
            Text: 'The power you need every day. Built to keep you productive and connected! Stay connected to what matters most with long-lasting battery life and a slim micro-edge bezel design. Designed to stay productive and entertained on the go, this HP laptop features reliable performance and a large screen, so you can stream, browse and complete tasks quickly! Buy yours now!',
            Screen: 'FHD 15.6"',
            Processor: 'AMD R5',
            OperatingSystem: 'Windows 11 Home Single Language',
            Storage: '512GB SSD',
            Ram: '8GB DDR4'
        },
        Price: 520,
    },
    {
        title: 'ASUS TUF Dash 15,6" FX517ZC ',
        brand: 'ASUS',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/4711081724360-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzNjc2NTl8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzRZUzlvTUdVdk1USTBNRFU1TVRRek16Y3pNVEF1YW5CbnwzOGExYTI5ZDkyZWExOWEzMzIxNDhiYzhkMzc5YzBlZjMyYmQzNzExMjFkNjgzNDFmNTE1ZDI5N2VhZDI5Yzlj', 'https://www.alkosto.com/medias/4711081724360-005-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w2NjQwNnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnNU5DOW9aVEV2TVRJME1EVTVNVEkxTmpjNE16Z3VhbkJufDE0MTI5YWU4NTY1NTMxNzRlNTEyZWZiOTAwYjQwZTI4NzBiMWZmZDJmZTc0OTA3MGFlNjM4ZjE4YWQ0YWE3OGU', 'https://www.alkosto.com/medias/4711081724360-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyODU0ODh8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaG1PQzlvTnpFdk1USTBNRFU1TVRVMU1UWTVOVGd1YW5Cbnw2MDY0ODU2MTQ0NDAxM2JiMDY5YTM1OTU5YWM2YmQ1Y2I0MTg1YzgxODkzZjMwOTdmMGViYTRjZjUxNDlhZDlh'],
        description: {
            Text: 'With the black ASUS TUF Dash F15 enjoy an advanced gaming experience in a super slim chassis. It has an Intel Core i5 CPU, GeForce RTX 3050 GPU and a 144 Hz screen with excellent graphic fluidity. Its TUF MIL-STD chassis is built to withstand everyday knocks. Its battery of up to 16.6 hours allows you to do more tasks. The two speakers with four cutouts produce loud and immersive audio. In addition, its anti-dust system, n-Blade fans, heatsinks remove heat from the main components and dissipate it so that they work at full capacity. Take it now!',
            Screen: 'FHD 15.6" 144Hz',
            Processor: 'Intel Core i5-12450H',
            OperatingSystem: 'Windows 11 ',
            Storage: '512GB SSD',
            Ram: '16GB DDR4'
        },
        Price: 1150,
    },
    {
        title: 'ASUS 14" X415EA',
        brand: 'ASUS',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/4711081811893-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzODI1NTN8aW1hZ2UvanBlZ3xhR0psTDJneE5TOHhNek0wTkRFNU1EZ3lORFEzT0M4ME56RXhNRGd4T0RFeE9Ea3pYekF3TWw4eE5EQXdWM2d4TkRBd1NBfDA4MjU1N2ZkMWM2MGZiN2ExYWRjOWRiNDJhNGY0YTljOTRmZjRhYjIyOWMxNGQzZTg0ZGIxOWQ5ZGE0YjM4NmM', 'https://www.alkosto.com/medias/4711081811893-006-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w1MTk1N3xpbWFnZS9qcGVnfGFEazBMMmhsWmk4eE16TTBOREU1TXpFNE16YzNOQzgwTnpFeE1EZ3hPREV4T0Rrelh6QXdObDh4TkRBd1YzZ3hOREF3U0F8MmIyOTEyMjYwNzZiMDcxMjY3ZjlhZTJlOGIzZjA1NTA1MGVhMTUzNmUwNjJkNjAwMmQzZDI1MDNjY2JhNDQ3YQ', 'https://www.alkosto.com/medias/4711081811893-005-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w2Mzc5NXxpbWFnZS9qcGVnfGFEWXlMMmhpTkM4eE16TTBOREU1TWpVNU16azFNQzgwTnpFeE1EZ3hPREV4T0Rrelh6QXdOVjh4TkRBd1YzZ3hOREF3U0F8MTJhYjFkZDZlNzVkMjExNTA0MDFlYzUzNTg4NjNhMTZhYjczYTEyODI1MGU4MDhiODgxMWQwYjYzNzM1Y2I1Yw'],
        description: {
            Text: 'Whether for work or play, ASUS X415 is the laptop that delivers great performance and immersive visuals. Its NanoEdge display features wide 178° viewing angles and an anti-glare coating for a truly engaging experience. With a total weight of only 1.6 kg, the ASUS X415 is extremely portable, so light that it adapts to your lifestyle. ASUS X415 is equipped with the reversible USB-C® 3.2 port, designed to make connecting devices as easy as possible. Take it now!',
            Screen: 'FHD 14"',
            Processor: 'Intel Pentium Gold 7505',
            OperatingSystem: 'Windows 11 ',
            Storage: '256GB SSD',
            Ram: '8GB DDR4'
        },
        Price: 350,
    },
    {
        title: 'Gamer ACER 15.6" 53E7',
        brand: 'ACER',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121320873-002.jpg?context=bWFzdGVyfGltYWdlc3w1MTY4NTJ8aW1hZ2UvanBlZ3xhREkzTDJoaE15OHhNelV5T1Rjek9EZ3dOVEkzT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpJd09EY3pYekF3TWk1cWNHY3w2NmFmYTEzMWJiNGJhYjVkN2M5MDA0NmMwMWIwMDNhZjQ1Y2U1NDY2MDZlNmI4NWRmYjRiOTQ2MGQxYjhlZDBk', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121320873-007.jpg?context=bWFzdGVyfGltYWdlc3wzOTAyMTl8aW1hZ2UvanBlZ3xhRGMwTDJnNFlpOHhNelV5T1RjME1UYzFORE01T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4ME56RXhNVEl4TXpJd09EY3pYekF3Tnk1cWNHY3wxOWU2NzgwN2RmZDNmZjE4ZDdmNzRhNjM4N2E4YTE1MjJmMDA0OWE3NTMzY2MzM2ZiYjlmOTcwNjlkYWZmYTIw', 'https://www.alkosto.com/medias/60Wx60H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121320873-006.jpg?context=bWFzdGVyfGltYWdlc3wxNjMxfGltYWdlL2pwZWd8YUdJMUwyZzROeTh4TXpVeU9UYzBNVFl5TXpNeU5pODJNRmQ0TmpCSVgyMWhjM1JsY2k5b2IzUm1iMnhrWlhJdmRISmhibk5tWlhJdmFXNWpiMjFwYm1jdlpHVndiM05wZEM5b2VXSnlhWE10YVc1MFpYSm1ZV05sY3k5SlRpOXRaV1JwWVM5d2NtOWtkV04wTHpRM01URXhNakV6TWpBNE56TmZNREEyTG1wd1p3fDZlMTE2ZTJhNDllMmJlMjk1NmMzNDg5MTQwODI2Njg5MjJjMWFhMThlN2IwNDcyMDQzMTc1YzY1MDQzODMwODM'],
        description: {
            Text: 'Acer invites you to enjoy the unique Nitro 5 which has clearer sound thanks to its double 2W speakers. With DTS:X® Ultra, which can emit a 3D spatial sound environment, allowing you to hear from wherever your opponents come with excellent precision. You can also count on an abundant range of ports, such as HDMI and the latest USB 3.1 standard with compatibility for the 1st and 2nd generations. In the same way you will have an FHD screen- IPS technology, more vibrant colors and high quality video. buy it here',
            Screen: 'FHD 15.6" 144Hz',
            Processor: 'Intel Core i5 11400H',
            OperatingSystem: 'Windows 11 ',
            Storage: '512GB SSD',
            Ram: '8GB DDR4'
        },
        Price: 930,
    },
    {
        title: 'LENOVO 14" IdeaPad 1',
        brand: 'LENOVO',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/196800798978-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NjE5NTl8aW1hZ2UvanBlZ3xhR00wTDJnNVl5OHhNelEyTlRJMk9UVXdNVGs0TWk4eE9UWTRNREEzT1RnNU56aGZNREF5WHpFME1EQlhlREUwTURCSXxjNzY4NDdiZDJjNThkNjc3OTg1OWEwYWE5NWNiMjZlNGIzNTRiNzc2YzY5ZDdlNjE1ZTBmNTQwMzc2MDdjNjAy', 'https://www.alkosto.com/medias/196800798978-009-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNDgxMzR8aW1hZ2UvanBlZ3xhRGM1TDJobU5TOHhNelEyTlRJM016WXpNRGMxTUM4eE9UWTRNREEzT1RnNU56aGZNREE1WHpFME1EQlhlREUwTURCSXxhMmE0N2Y5NTFiY2U5NTJiZTAyNzk0NDY5ZjRlOWRlOTNmZTAzODBjN2IxZGVkMTEwMDFjYmUyZmY4M2NlZTI3', 'https://www.alkosto.com/medias/196800798978-007-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w1MDU5N3xpbWFnZS9qcGVnfGFERXlMMmc0TlM4eE16UTJOVEkzTWpRMU1URXdNaTh4T1RZNE1EQTNPVGc1TnpoZk1EQTNYekUwTURCWGVERTBNREJJfGRhZGJmYWUyMjBhOGIzN2FjMTY3MDQ1OGFlNDI1YmM0NzMwZTU3YjA1NjU4NDc1Yzg5ZTBlOTgxZWNiOGE4Y2M'],
        description: {
            Text: 'The LENOVO IdeaPad 1 laptop in gray color is an accessible laptop but with everything you need, perfect for your daily tasks, hand in hand with an extraordinary design, this device will exceed your expectations. Likewise, it will provide you with superior entertainment thanks to its high-definition resolution and sound, additionally you will feel safe thanks to its privacy shutter on your camera, use it in your meetings or video calls, you just have to close the shutter and control who is watching you, not let it pass Take advantage and take yours now!',
            Screen: 'FHD 14" ',
            Processor: 'AMD Athlon',
            OperatingSystem: 'Windows 11 ',
            Storage: '256GB SSD',
            Ram: '8GB DDR4'
        },
        Price: 360,
    },
    {
        title: 'MacBook Air 13" MLXW3E/A',
        brand: 'APPLE',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/194253190936-003-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNDkxNzN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3hZUzlvTlRJdk1USTNNamt5T1RrMk5qUTVNall1YW5CbnxiZTNkNmU1YTBhNDVjN2RlMDBhNmMzYzdkNGNkY2I4OWFmMzg1Y2YyY2FhMzJhM2I0Yzk3OTRmODNhNDhhM2Nh', 'https://www.alkosto.com/medias/194253190936-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNTMyNjd8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzBZaTlvTmpndk1USTNNamt6TURBeU5UUTNOVEF1YW5CbnxkM2JmOTEyMzlhMmVjMzc1NGY5M2IwOWRhMjU1MmM3Y2IwY2E4NjIyZjBmNDZmMWFlN2EzOGQ4ZmYyZjAyZjI3', 'https://www.alkosto.com/medias/194253190936-006-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w4NTI3NnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobE9DOW9ZVGd2TVRJM01qa3pNREUwTXpRek9UZ3VhbkJufGZmMjU3ZTkxMGFkZWJmYTU3OTljMGI0YTUyZjY3Y2EzMjZhMGNhOGQ5NGRjOTg4YTQ2ZDVlZDI3N2Y0ODg3OTY'],
        description: {
            Text: 'MacBook Air, redesigned to harness the full power of the M2 chip, thin and light, with MagSafe charger, Magic Keyboard, works seamlessly with iPhone, 1080p HD camera, 4 speakers with spatial audio, and up to 18 hours of battery life on a Incredibly slim, strong aluminum casing.',
            Screen: '13.6"',
            Processor: 'Chip M2',
            OperatingSystem: 'MacOS Monterrey',
            Storage: '256GB SSD',
            Ram: '8GB'
        },
        Price: 1760,
    },
    {
        title: 'MacBook Pro 14" MPHE3E/A',
        brand: 'APPLE',
        type: 'NOTEBOOK',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253317876-001.jpg?context=bWFzdGVyfGltYWdlc3wxODQzODJ8aW1hZ2UvanBlZ3xhRFUxTDJoa1pTOHhNell6TVRjMk16RXlNREUxT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TVRjNE56WmZNREF4TG1wd1p3fGMyNTMxZDk2YWE1ZjY0ZDA4MjA1ODg3Yjc5NDIwYTBhZWI4NTcyMmU3YTE3NTE5Zjg2OTcwMWI1MDE5MTY1ZDk', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253317876-006.jpg?context=bWFzdGVyfGltYWdlc3wxOTExMzd8aW1hZ2UvanBlZ3xhR05oTDJneE9DOHhNell6TVRjMk5qQTJPVEkzT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TVRjNE56WmZNREEyTG1wd1p3fDhhZTlhOTE3ZDQ1NDQyNTIyMGEwODZhOWM1NDVlZGZkYWE3NjkzMTQyZWE2OGI3ZDExNjUzNGRiOWRkZWQ4MjE', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253317876-008.jpg?context=bWFzdGVyfGltYWdlc3wyOTgxMTJ8aW1hZ2UvanBlZ3xhRE13TDJnNE9TOHhNell6TVRjMk56STBPRGt5Tmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TVRjNE56WmZNREE0TG1wd1p3fGVlNzEwOGIxNmY5MDkzZTcwYmVlZjVkODBmNGZmNWU2MjkxN2Y2ZGNjZWMxMGQ1YTEyOTU4ZDg4YWYwNzRlOTk'],
        description: {
            Text: 'MacBook Pro Gray debuts unprecedented power and efficiency with M2 Pro chips, the most powerful and efficient chip ever in a professional notebook. It has outstanding performance, even when not connected to the current. A battery that accompanies you for longer. A spectacular Liquid Retina XDR screen and all the ports you need for your daily tasks. Take the ideal MacBook for you here!',
            Screen: '14"',
            Processor: 'Chip M2 Pro',
            OperatingSystem: 'MacOS Ventura',
            Storage: '512GB SSD',
            Ram: '16GB'
        },
        Price: 3060,
    },
    {
        title: 'All In One LENOVO 21,5" AIO 3',
        brand: 'LENOVO',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804873718-002.jpg?context=bWFzdGVyfGltYWdlc3wzMDk2MDh8aW1hZ2UvanBlZ3xhR0kyTDJnNU15OHhNemMwTlRVMk16SXpPRFF6TUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTRNRFE0TnpNM01UaGZNREF5TG1wd1p3fGM1YzBlZmE1MjVhYmZmNjkyMzY1Mzg5YTllMWZmZjA2MzNkYmRjZGVlZDljNzQ0NzVlODM2NTEzMjYzYTJjMmY', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804873718-008.jpg?context=bWFzdGVyfGltYWdlc3w3MDU5OXxpbWFnZS9qcGVnfGFESmxMMmhpWWk4eE16YzBOVFUyTmpjM056TTNOQzh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTROek0zTVRoZk1EQTRMbXB3Wnd8ZTUxZDU3ZDY1YmQyMWY0OTU1NmNmMjAyOGRlMzQ1OThiOWM3NjZiM2QzZmFhNDNlMmViOGI5MzgzMjljZmQyMg', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804873718-006.jpg?context=bWFzdGVyfGltYWdlc3wzNDI2NHxpbWFnZS9qcGVnfGFHTTNMMmcwWVM4eE16YzBOVFUyTlRVNU56Y3lOaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTROek0zTVRoZk1EQTJMbXB3Wnd8YTY2ZGIyMmE4YjVlNGJlZjQ4YmU2NTRhZTYyNzNkOGM3NTdhYjhmZDllZGMzNmMyYmYyNDlmMGQ2NzZhZGNmYg'],
        description: {
            Text: "The white Lenovo all-in-one AIO 3 features an AMD processor and integrated graphics for optimal performance for everyday tasks. Its FHD screen design and minimalist edges make it ideal for work and videos that require detail, its matte finish prevents external light from reflecting, which generates less fatigue and takes care of your eyes. Its HD audio system allows you to enjoy your music and calls clearly, additionally with its 720p camera you will achieve high quality video calls. Don't forget to bring yours.",
            Screen: 'FHD 21.5"',
            Processor: 'AMD Ryzen 3 3250U',
            OperatingSystem: 'Windows Home 11',
            Storage: '256GB SSD',
            Ram: '8GB'
        },
        Price: 495,
    },
    {
        title: 'All In One LENOVO 23,8" AIO 3',
        brand: 'LENOVO',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196803449921-002.jpg?context=bWFzdGVyfGltYWdlc3wzNjE0NTd8aW1hZ2UvanBlZ3xhRGcxTDJnMlpDOHhNelkxTURFNE1qTXdOemczTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTRNRE0wTkRrNU1qRmZNREF5TG1wd1p3fGU1ZDczY2NmNzk4MTE5M2M3MDU4ZjYxNmRkYWNkYTFlMDNhMjllYzJjMDBjNTM5ZTE1ZmQ4ZGFjZjg5OGJkMGE', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196803449921-008.jpg?context=bWFzdGVyfGltYWdlc3w2ODY1MnxpbWFnZS9qcGVnfGFEVm1MMmhsTVM4eE16WTFNREU0TlRnME5qZ3hOQzh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1ETTBORGs1TWpGZk1EQTRMbXB3Wnd8MTU1M2Q2YmJjNGRhM2NhN2ZhY2FjMjY2NjIxZGQ5ZTk0YjBmOTRiNTk3YWFkNjBhNzQ1ZDVmZDM3ZTA4NGRkMw', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196803449921-009.jpg?context=bWFzdGVyfGltYWdlc3w4NTg3MXxpbWFnZS9qcGVnfGFEazJMMmhqTWk4eE16WTFNREU0TmpRek5qWXpPQzh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1ETTBORGs1TWpGZk1EQTVMbXB3Wnd8NDg5M2YzYTRmNDg1N2QyNDU0MmVlMTkwM2M3NDgyMjFiNDQ5MzgyOGUzNTYyNmFlYmM4MDA5OWU0NzRkNGI4NQ'],
        description: {
            Text: "The Aio LENOVO Idea Center AIO 3, was created for efficient performance and truly elegant engineering. Just the right balance of processor, memory, and plenty of solid-state storage, so it can handle a variety of tasks. With its modern support you will save space on the desk, its almost borderless screen, Full HD resolution and multi-touch panel combine so that you do not lose detail in your projects and take advantage of your creativity. Do not miss this opportunity, take yours.",
            Screen: 'FHD 23.8"',
            Processor: 'AMD Ryzen 5 5500U',
            OperatingSystem: 'Windows Home 11',
            Storage: '512GB SSD',
            Ram: '8GB'
        },
        Price: 765,
    },
    {
        title: 'All in One HP 23.8" cb0003la',
        brand: 'HP',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561384-002.jpg?context=bWFzdGVyfGltYWdlc3wzNTg1OTR8aW1hZ2UvanBlZ3xhRGt4TDJobVpTOHhNelV3TURBNU5qTTRNRGsxT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFek9EUmZNREF5TG1wd1p3fDc5YjE4NzVkNzExNzcxMDQ2NmY5MzE4ZGY4ZGZiNzY0NWVhYzJjZDllZWY2NDBjOTY3ZjU0M2QwNTlkOGJkZTk', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561384-004.jpg?context=bWFzdGVyfGltYWdlc3wyNjE1OTZ8aW1hZ2UvanBlZ3xhREpoTDJnNFpTOHhNelV3TURBNU56VTJNRFl3Tmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFek9EUmZNREEwTG1wd1p3fDNkMDY1MmNlNWVmN2JiMDBhMmZkOTUyNjExOWY1OTM4ZTE5OGZlNTQ3ZGNhYzk0OTFiMTQ2OTQwNzA0ZTkzYzM', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561384-005.jpg?context=bWFzdGVyfGltYWdlc3wzODEwOTN8aW1hZ2UvanBlZ3xhREl3TDJnek1pOHhNelV3TURBNU9ERTFNRFF6TUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFek9EUmZNREExTG1wd1p3fDJjMDZlNzU0MzMwZTJkMDMxNzg1ZTA2YzhhMmI3MTRkNjEzZWMxYTZmYTVkM2Q1MGM5MjJiMjViNjk5YjcyZmM'],
        description: {
            Text: "Attractive design. For intense work. The All in One HP combines the power of a desktop computer with the beauty of a modern screen. With its powerful processor, you can enjoy a cinematic experience on the three-sided micro-edge FHD display with dual speakers. It was designed to keep your space tidy through careful placement of the ports, and its compact design with aluminum support includes sustainable materials such as ocean-sourced plastic and post-consumer recycled plastics. Don't wait any longer, get yours here!",
            Screen: 'FHD 23.8"',
            Processor: 'AMD Ryzen 3 5300U',
            OperatingSystem: 'Windows Home 11',
            Storage: '256GB SSD',
            Ram: '8GB'
        },
        Price: 490,
    },
    {
        title: 'All in One HP 21.5" dd2019la',
        brand: 'HP',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197192055137-002.jpg?context=bWFzdGVyfGltYWdlc3wzOTgzNTR8aW1hZ2UvanBlZ3xhREl6TDJnd01DOHhNelkwT1RBeU9EQTFOVEEzTUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UY3hPVEl3TlRVeE16ZGZNREF5TG1wd1p3fDdmOWY0YTM5MzdlYzY5NDRiOTA1YTUxZjc1ZDc2MmY1MDIyZGEzMDkxZmE2NTI5ZjU1YjU1ZTYzNjM1MDQ2N2M', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197192055137-004.jpg?context=bWFzdGVyfGltYWdlc3wyOTQ5Njh8aW1hZ2UvanBlZ3xhRFF5TDJnM01DOHhNelkwT1RBeU9USXpORGN4T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UY3hPVEl3TlRVeE16ZGZNREEwTG1wd1p3fGNjNjVmYjY1ZGIzNjllMTkzYzBlZjllY2Q3N2ZlMzAyNzMyMTRlMDA3NjNiZjUyNTRmZjE5NTAzMWM0N2MzMTE', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197192055137-003.jpg?context=bWFzdGVyfGltYWdlc3wyODYyOTB8aW1hZ2UvanBlZ3xhRE01TDJneE5DOHhNelkwT1RBeU9EWTBORGc1TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UY3hPVEl3TlRVeE16ZGZNREF6TG1wd1p3fGY5ZjBhNzZjMzMxYTU0Y2U0YThjOGExMGJhODg3MTY4YjhhN2FmNDY3NWYzMTJmNmI0MGRkYWIxNGJlMDVlOTE'],
        description: {
            Text: "Think long term. The HP All in One 22-dd2019la combines the power of a desktop with the beauty of a slim, modern display in a reliable device that's designed to grow with you. Get more done with a reliable processor, and keep your PC up to date with an easy-to-remove back panel. Proven, rugged design built to last, effective and trusted by millions of people, this powerful AIO from HP undergoes more than 230 individual quality tests. Don't wait any longer, buy yours here!",
            Screen: 'FHD 21.5"',
            Processor: 'Intel Core i3 1215U',
            OperatingSystem: 'Windows Home 11',
            Storage: '256GB SSD',
            Ram: '8GB'
        },
        Price: 415,
    },
    {
        title: 'Mac mini MMFK3LZ/A',
        brand: 'APPLE',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253142546-001.jpg?context=bWFzdGVyfGltYWdlc3wxNDMyNDl8aW1hZ2UvanBlZ3xhR00xTDJoaFppOHhNell6TVRjME16WTFOVGsyTmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE14TkRJMU5EWmZNREF4TG1wd1p3fDVhNTdlYmZmMDgyYzhiNmEyNmY4OGZhYWVkN2IwN2IwMGI5ZmQ3MjdjYzE0MzcxZThmNmQwYWYzOTgwNDM5ZTE', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253142546-003.jpg?context=bWFzdGVyfGltYWdlc3wxMzE1OTV8aW1hZ2UvanBlZ3xhRFZrTDJnelppOHhNell6TVRjME5EZ3pOVFl4TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE14TkRJMU5EWmZNREF6TG1wd1p3fGRhZTdjNTNjY2VlM2Q3MTY1MzRlNmU0NjEzNGM1ZjZjMGI3NzAyYzM5NzY0ZDAyZDA0NzA0OTVmZGU2YjMyNGE', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253142546-005.jpg?context=bWFzdGVyfGltYWdlc3wzNTc1NDd8aW1hZ2UvanBlZ3xhR0kwTDJnM09DOHhNell6TVRjME5qQXhOVEkyTWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE14TkRJMU5EWmZNREExTG1wd1p3fGZiYTdkOTgxNjJkMzU1OTcyYzY1NWUwYTFmYjZmYWFlMmUyNjc2ZjIxNmVkYTk3MjI0MGQ3MDI1NjljYjA0M2I'],
        description: {
            Text: "Mac mini lets you multitask at breakneck speed. The M2 chip seems to fly when you're playing immersive games or preparing complex presentations. And its wide variety of ports gives you the versatility to connect whatever you need. Mac mini is ready for whatever you throw at it.",
            Screen: 'Retina 24"',
            Processor: 'Chip M2',
            OperatingSystem: 'macOS Ventura',
            Storage: '512GB SSD',
            Ram: '8GB'
        },
        Price: 1055,
    },
    {
        title: 'Mac mini MNH73LZ/A',
        brand: 'APPLE',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253330103-003.jpg?context=bWFzdGVyfGltYWdlc3wxMzQyMDN8aW1hZ2UvanBlZ3xhREZqTDJoaVl5OHhNell6TVRjNE1ESXlOVEExTkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TXpBeE1ETmZNREF6TG1wd1p3fDkzOTZhZjMxYWJkYmRiN2QwZmY4ZTYxOWE3N2JlNGJlYTIxYjE1YzBmNDllM2Y5YWQ5ODExYWI0NzMxYzg4NGI', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253330103-004.jpg?context=bWFzdGVyfGltYWdlc3wzMjIxMDJ8aW1hZ2UvanBlZ3xhR0ptTDJoaE55OHhNell6TVRjNE1EZ3hORGczT0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TXpBeE1ETmZNREEwTG1wd1p3fDYwNTNlOGQ4NDRmYmNiZWYyZDQzOTI2MjM3YmY0NzYwNWFkZjZiNWQ4ZjM4YzNlOGE4ZWQ1ZDQyZGIxZGU3OGY', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253330103-005.jpg?context=bWFzdGVyfGltYWdlc3wzNTc1NDd8aW1hZ2UvanBlZ3xhR0kyTDJnMFlpOHhNell6TVRjNE1UUXdORGN3TWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UUXlOVE16TXpBeE1ETmZNREExTG1wd1p3fGU3MTUwMGVhMDcxZTEwZTgxNTE0OTUwYzM4NzVhYWM4MzQwYzU2YTA3ZmM3MzA0YWM2NDMzYzg5YzdmZjNmYmI'],
        description: {
            Text: "Mac mini lets you multitask at breakneck speed. The M2 Pro chip tackles monumental workloads like 8K ProRes video and large image editing. In addition, its wide variety of ports gives it the versatility to connect whatever you need. Mac mini is ready for whatever you throw at it.",
            Screen: 'Retina 24"',
            Processor: 'Chip M2 Pro',
            OperatingSystem: 'macOS Ventura',
            Storage: '512GB SSD',
            Ram: '16GB'
        },
        Price: 2180,
    },
    {
        title: 'All in One Pavilion HP 31.5" b0001la',
        brand: 'HP',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/196548730490-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzMDEyNDV8aW1hZ2UvanBlZ3xhREF4TDJnMllTOHhNek01TXpZeU9UTXhOVEV3TWk4eE9UWTFORGczTXpBME9UQmZNREF5WHpFME1EQlhlREUwTURCSXwyODdhYzlhMjJmNzUzZDhkYjNkOTliY2EwODEyYTY1NjJhNmJkOWQxYmRhZjNkNDE2Y2VjNTI4Zjg2YzhmYmE3', 'https://www.alkosto.com/medias/196548730490-004-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w3MzYxN3xpbWFnZS9qcGVnfGFHUmhMMmhpTVM4eE16TTVNell6TURRNU5EYzFNQzh4T1RZMU5EZzNNekEwT1RCZk1EQTBYekUwTURCWGVERTBNREJJfGJhZmFiMjE1OGFmNDFkMWQ3NjZmMzllOTVmYjUxODI2MDcxZGVhMDY2ZDUxMDNmYjk3MTIwZjRjOWU0OGEzMTQ', 'https://www.alkosto.com/medias/196548730490-008-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w1MjkzNzh8aW1hZ2UvanBlZ3xhRFUyTDJnMlpDOHhNek01TXpZek1qZzFOREEwTmk4eE9UWTFORGczTXpBME9UQmZNREE0WHpFME1EQlhlREUwTURCSXwyMGE2ZDFmNmEwNDg2NDU2Njg3YmU5MzI1ZmUwM2NkMTc0N2Y0YzQ1MzY0ZDIwZmUzZWYwYjAzOTVmNmQ3YThi'],
        description: {
            Text: "Elegance and power. ,All ,in ,One ,Pavilion by HP. Unleash your creativity with its 4K UHD display with DCI-P3 color gamut, stunning cinema-quality images, with stunning NVIDIA RTX 3050 graphics and a powerful processor that gives you superior performance for multitasking. Enjoy fantastic audio thanks to its integrated sound bar with 6 speakers calibrated by experts from B&O. Connect a streaming device or game console to kick back and enjoy the entertainment you love at the click of a button. Don't wait any longer, get yours now!",
            Screen: '4K UHD 31.5"',
            Processor: 'Intel Core i7 12700T',
            OperatingSystem: 'Windows Home 11',
            Storage: '512GB SSD',
            Ram: '16GB'
        },
        Price: 2115,
    },
    {
        title: 'All in One HP 23.8" cb009la',
        brand: 'HP',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561445-002.jpg?context=bWFzdGVyfGltYWdlc3wzMzcxMjh8aW1hZ2UvanBlZ3xhREl4TDJnd1l5OHhNemM1TURBNU1qUXlOekk1TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFME5EVmZNREF5TG1wd1p3fGEzOGM0ZDM4NjZlNjU3ZTdmODZmOGQyNDg5YWNiZTZjMzBhZmNmMTlkNDY4MmNiMjMwZjJiYzc1NjEzOWZjNWM', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561445-006.jpg?context=bWFzdGVyfGltYWdlc3wyODE1MzN8aW1hZ2UvanBlZ3xhRFZqTDJoa01pOHhNemM1TURBNU5EYzROalU1TUM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFME5EVmZNREEyTG1wd1p3fDUzODJhMzBjMzA5NDUxNWIyY2Q5OTFiMThkODA2MTgxMmIzN2YyOWZhOTY1MTRiMWFmZWI5NjU3MWUwYzg2Yjk', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196548561445-007.jpg?context=bWFzdGVyfGltYWdlc3w0OTI5NDl8aW1hZ2UvanBlZ3xhRGs1TDJoa01TOHhNemM1TURBNU5UTTNOalF4TkM4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTFORGcxTmpFME5EVmZNREEzTG1wd1p3fDI1MzFkMTA4ODY4OTVkOGU0NDM4YmY1MTRiMWU1ODk3MTdhNTNmNWI2ZWJlNmE4NGI4Mzg4NmQzNzE2NzYzOWE'],
        description: {
            Text: "Think long term. The HP All-in-One combines the power of a PC with the beauty of a slim, modern display in one reliable device. Built to last, Life can be unpredictable, but your HP desktop shouldn't be. Backed by more than 230 individual tests, our desktops go above and beyond to give you durability you can count on and reliability you can count on. Boot up at full speed in seconds with up to 256GB PCIe SSD storage.",
            Screen: 'FHD 23.8"',
            Processor: 'AMD Ryzen 5 5500U',
            OperatingSystem: 'Windows Home 11',
            Storage: '256GB SSD',
            Ram: '8GB'
        },
        Price: 750,
    },
    {
        title: 'All In One LENOVO 27" AIO 3',
        brand: 'LENOVO',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197529451595-002.jpg?context=bWFzdGVyfGltYWdlc3wyNzM2MTd8aW1hZ2UvanBlZ3xhRFJqTDJoaU9TOHhNemMzTlRZME5USTNPREl6T0M4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzFNamswTlRFMU9UVmZNREF5TG1wd1p3fGYyNzliZmRjMGM4ZGRmNGMwOTQ5MTA0MzE2NDM3MjhjMTViYzgxNWI3NTVkMzhiNGY4YzFkYmQwY2VhMDRmM2I', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197529451595-008.jpg?context=bWFzdGVyfGltYWdlc3w1NTM4MXxpbWFnZS9qcGVnfGFHVTRMMmc1Tnk4eE16YzNOVFkwT0RneE56RTRNaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RjMU1qazBOVEUxT1RWZk1EQTRMbXB3Wnd8MjQ5MjExMzlkYmQ4Mzk5MzU0NDE4NDQ4ZjgwMjg2MmRjNTU2NWU5OGY0Y2YwYTU5ZWFhM2M1ZWY4NmQ5NDMwYg', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197529451595-003.jpg?context=bWFzdGVyfGltYWdlc3wzMTExMzl8aW1hZ2UvanBlZ3xhR1ZsTDJoaE5DOHhNemMzTlRZME5UZzJPREEyTWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UYzFNamswTlRFMU9UVmZNREF6TG1wd1p3fDZlMmRiNTVkYjcyY2M0Zjg3MjhjM2NmMGJhYzdhZmQ0MzVlNzZjMDdkOTZiMzcwMmM3NjI3NTZhZTQ1YTViMDY'],
        description: {
            Text: "The LENOVO AIO 3 all-in-one desktop computer gives you excellent performance and speed for your study, work and multimedia tasks, thanks to a powerful processor in a fair balance of Ram and solid state storage. Its 27 inch FHD screen with minimalist edges allow fluidity and detail that you will enjoy. It has Wifi 6 which improves speed and data transfer. Its HD sound and its 5 mpx camera allow you to make clear and quality video calls. run out of yours!",
            Screen: 'FHD 27"',
            Processor: 'AMD Ryzen 5 7530U',
            OperatingSystem: 'Windows Home 11',
            Storage: '1TB SSD',
            Ram: '16GB'
        },
        Price: 1060,
    },
    {
        title: 'All In One LENOVO 31,5" YOGA AIO 9',
        brand: 'LENOVO',
        type: 'DESKTOP',
        cover_photo: [
            'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804697543-002.jpg?context=bWFzdGVyfGltYWdlc3wyMTk3MzZ8aW1hZ2UvanBlZ3xhREUwTDJobE1DOHhNemczT1RZM09UYzNPRGcwTmk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4eE9UWTRNRFEyT1RjMU5ETmZNREF5TG1wd1p3fGIxNjI1ZDRlZmNlZmZlMDBlNTEzOTg5ZGVkYzMyY2RmYWI2YTY5M2VhMGQyMjRkMmE3YmVlYWQxMjc5M2NlMDQ', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804697543-007.jpg?context=bWFzdGVyfGltYWdlc3w3Nzc0NXxpbWFnZS9qcGVnfGFEYzNMMmhtTlM4eE16ZzNPVFk0TWpjeU56azJOaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTJPVGMxTkROZk1EQTNMbXB3Wnd8NTU3ZDBiNDU3YjBmMDU1YTAwOGEyNDVkNmRkZDBjNTg3NzRiY2Y0ZWE1YzI2YTIwNWYzNWViZjBlYjc1Y2ExOQ', 'https://www.alkosto.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196804697543-006.jpg?context=bWFzdGVyfGltYWdlc3w5OTkyN3xpbWFnZS9qcGVnfGFESmlMMmhtTmk4eE16ZzNPVFk0TWpFek9ERTBNaTh4TkRBd1YzZ3hOREF3U0Y5dFlYTjBaWEl2YUc5MFptOXNaR1Z5TDNSeVlXNXpabVZ5TDJsdVkyOXRhVzVuTDJSbGNHOXphWFF2YUhsaWNtbHpMV2x1ZEdWeVptRmpaWE12U1U0dmJXVmthV0V2Y0hKdlpIVmpkQzh4T1RZNE1EUTJPVGMxTkROZk1EQTJMbXB3Wnd8M2IzOWUwOWI1ZTY5NmViYTM5NjJjZDAxYjYxYTI0OTNmNGE2OGEzYTNiODQyOWJiMjFhOWRlOTFkYjUwZmE3Yg'],
        description: {
            Text: "Let your creativity run wild with the LENOVO Yoga 9 desktop, the ideal tool for you, built with high standards of performance and truly efficient engineering. thanks to its set of processor, memory and solid state storage capacity. Its sustainable and minimalist architecture presents an ultra-thin design with its huge 32 ips almost borderless screen that integrates into your environments and surprises you with its 4K image quality that together with its Harman Kardon speakers with Dolby Atmos will motivate your senses. don't let it go take it now!",
            Screen: ' 4k UHD 31.5"',
            Processor: 'Intel Core I9 13900H',
            OperatingSystem: 'Windows Home 11',
            Storage: '1TB SSD',
            Ram: '16GB'
        },
        Price: 4490,
    }
]