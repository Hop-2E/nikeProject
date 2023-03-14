import "../App.css";
import Header from "../components/Header";
import FourSmallPics from "../components/FourSmallPics";
import JoinUsFirstComp from "../components/JoinUsFirstComp";
import OneBgTwoSm from "../components/OneBgTwoSm";
import FourSmPicsNumTwi from "../components/FourSmPicsNumTwi";
import Steps from "../components/Steps";
import PicOne from "../components/PicOne";
const JoinUs = () => {
  return (
    <>
      <Header />
      <br />
      <span
        className="mainTwoType"
        style={{ fontWeight: 800, marginLeft: "150px" }}
      >
        Nike Membership
      </span>
      <br />
      <JoinUsFirstComp
        quote="
        BECOME A
        MEMBER"
        span="Sign up for free. Join the community."
        button="Join Us"
      />
      <OneBgTwoSm
        secName={"SHOP JORDAN ICONS"}
        photoOne={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_906,c_limit/729313d9-036c-45f5-985a-8d82fdb9e880/nike-membership.jpg"
        }
        photoTwo={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_906,c_limit/22befae5-7263-4b6e-af4c-d8985aaabdd9/nike-membership.jpg"
        }
        photoThree={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_906,c_limit/3813c078-64a4-4538-b3ec-352928b999a8/nike-membership.jpg"
        }
      />

      <FourSmallPics
        title="More Benefits"
        image="https://static.nike.com/a/images/w_906,c_limit/469ad8dd-9f86-48ae-a8bb-61ced8897454/nike-membership.jpg"
        imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/05cb7783-e2fa-4034-99a6-32d8f9041ce0/nike-membership.jpg"
        imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/4246ec2d-1fc3-4ed6-854b-2b36ab9218fe/nike-membership.jpg"
        imageFour="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/49a0117f-63c9-43d2-83d6-ebc1001c681e/nike-membership.jpg"
        type="
        Explore workouts from Nike Trainers.
        "
        typeTwo="
        
        Special offers and promos all year long.
        "
        typeThree="
        Get tips on styling and product.
        "
        typeFour="        Get more in-store with exclusive benefits.
        "
        Button="Shop"
      />
      <br />
      <br />
      <br />
      <FourSmPicsNumTwi
        title="DOWNLOAD TO JOIN
        THE COMMUNITY"
        image="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/8f1dee3a-72ae-4ecd-8203-ea5ae4e3b790/nike-membership.jpg"
        imageTwo="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/891d8a74-903f-4739-ac47-c3f641bb0a3c/nike-membership.jpg"
        imageThree="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/7b248ebb-2bbc-4487-a461-b440572a92d5/nike-membership.jpg"
        imageFour="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_540,c_limit/98af233d-3ff8-42e3-9608-be29a3b7dfbf/nike-membership.jpg"
        type="Stay a step ahead with the latest sneakers drops."
        typeTwo="
        
        Special offers and promos all year long.
        "
        typeThree="
        Get tips on styling and product.
        "
        typeFour="        Get more in-store with exclusive benefits.
        "
      />
      <br />
      <br />
      <Steps />

      <br />
      <br />
      <PicOne
        quote="THANKS FOR
        BEING HERE
        "
        span="Your global community awaits."
        button="Join Us"
        image="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/b0ec2a73-dcb3-456b-b2b7-9bb62374ac62/nike-membership.png"
      />
      <br />
      <JoinUsFirstComp
        quote="
        "
        span="Were you looking for
        something else?"
        button="My account"
      />
    </>
  );
};
export default JoinUs;
