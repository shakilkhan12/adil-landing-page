import Cards from "@/components/Cards";
import Content from "@/components/Content";
import FAQ from "@/components/FAQ";
import ImageContainer from "@/components/ImageContainer";
import Navbar from "@/components/Navbar";
import PricingTable from "@/components/PricingTable";
import "animate.css/animate.compat.css"


export default function Home() {
  return (
    <main className="">
     <div className="relative min-h-[800px] h-auto">
     <ImageContainer />
     </div>
    <Navbar />
    <Cards />
    <Content direction="right" image="/images/1.jpg" details="Invite your contractor to GeekPay" heading="FOR THE COMPANY" />
    <Content direction="left" image="/images/2.jpg" details="Create the invoice" heading="FOR THE COMPANY" mt={true} />
    <Content direction="right" image="/images/1.jpg" details="Streamline the bulk payments with
a click of a button" heading="FOR THE COMPANY" mt={true} />
    <Content direction="left" image="/images/2.jpg" details="Get invitation from
the company to GeekPay" heading="FOR THE COMPANY" mt={true} />
    <Content direction="right" image="/images/1.jpg" details="Get paid to your corporate wallet" heading="FOR THE CONTRACTOR" mt={true} />

    <PricingTable />
    <FAQ />
    </main>
  );
}
