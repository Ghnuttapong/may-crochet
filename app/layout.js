import { Inter, Kanit } from "next/font/google";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["thai", "latin"], weight: ["200", "400", "500", "600"]})

const theme = createTheme({
  fontSmoothing: true,
  colorScheme: 'white',
  primaryColor: 'pink',
  colors: {
    pink: [
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5',
      '#ffb0b5'
    ],
  },
});

export const metadata = {
  title: "Crochet by Mniratch",
  description: "Crochet by Mniratch ไหมพรมโคเชรต์ มีความแข็งแรงและทนทาน เป็นพรมที่มีคุณภาพที่ดีที่สุด ทุกชิ้นงาน Crochet ที่จัดทำที่นี่มีการออกแบบที่หลากหลาย ทั้งจากหมวดการ์ตูนที่นิยม เทศกาลต่างๆ หรือ ของขวัญสำหรับคนพิเศษ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={kanit.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
