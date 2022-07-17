import { useEffect, useRef } from "react";
import {
  Header,
  ContentBox,
  BoxColor,
  Bala,
  CirclePower,
  Barr,
  LinePower,
} from "./styles";

export const HeaderSection = () => {
  const refHeader = useRef(null);
  const refBala = useRef(null);
  const refLinePower = useRef(null);

  useEffect(() => {
    let clickPush = false;
    let isTouch = false;
    let x = 82;
    let xTouch = 82;
    let y;
    let element;
    let width = window.innerWidth;
    const left_LIMIT = 50;
    let right_LIMIT = width - 70;

    function setPoligon() {
      refHeader.current.style.clipPath = `polygon(
        0px 85px,
        3px 90px,
        5px 93px,
        10px 97px,
        15px 99px,
        20px 100px,
        ${x - 29}px 100px,
        ${x}px 130px,
        ${x + 29}px 100px,
        calc(100% - 20px) 100px,
        calc(100% - 15px) 99px,
        calc(100% - 10px) 97px,
        calc(100% - 5px) 93px,
        calc(100% - 3px) 90px,
        100% 85px,
        100% 0px,
        0px 0px
      )`;
    }

    //this function determines the shape of the ammunition line
    function reziseLinePower(end) {
      const width = window.innerWidth;
      const xline = end + 1;
      const leftHeight = 10;
      refBala.current.style.left = `${end - 2}px`;
      refLinePower.current.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Cpath d='M ${xline} 78 C ${xline} ${
        leftHeight + 20
      } ${xline} ${leftHeight + 40} ${(width - xline) / 2 + xline - 30} ${
        leftHeight + 30
      } S ${width - 70} ${leftHeight + 30} ${
        width - 70
      } ${leftHeight} M 190 100 z'%0Astyle='fill:none;stroke:red;stroke-dasharray:5;stroke-linecap:round;stroke-width:3' /%3E%3C/svg%3E")`;
    }

    // initial execution
    reziseLinePower(x);

    // this function moves the bullet
    function disparar() {
      if (y && element) {
        if (y > 130) {
          clickPush = true;
          const selectElement = element;

          refBala.current.style.transition = "350ms ease 0s";
          refBala.current.style.top = `${y - 5}px`;
          selectElement.style.transition = "175ms ease 175ms";
          selectElement.style.boxShadow = " 0px 5px 15px 5px #ff4040";
          if (isTouch) {
            refBala.current.style.left = `${xTouch}px`;
          }
          setTimeout(() => {
            selectElement.style.transition = "";
            selectElement.style.boxShadow = "";
            refBala.current.style.transition = "";
            refBala.current.style.top = "120px";
            if (isTouch) {
              refBala.current.style.left = `${x}px`;
            }
            setTimeout(() => {
              if (clickPush) disparar();
              else {
                selectElement.click();
              }
            }, 20);
          }, 350);
        }
      }
    }

    function setCoordinate(e) {
      if (e.clientX) {
        y = e.clientY;
        if (e.clientX <= 50) {
          x = left_LIMIT;
        } else if (e.clientX > width - 75) {
          x = right_LIMIT;
        } else {
          x = e.clientX;
        }
      } else {
        x = 80;
        y = 200;
      }
    }

    //this function move triangle
    function triangleMove() {
      reziseLinePower(x);
      setPoligon();
    }

    function mouseLeave() {
      clickPush = false;
    }

    function touchst(e) {
      isTouch = true;
      setCoordinate(e.touches[0]);
      element = e.target;
      xTouch = e.touches[0].clientX;
      triangleMove();
      disparar();
    }

    function clickpush() {
      if (!isTouch) {
        disparar();
      }
    }

    function touchmove(e) {
      setCoordinate(e.touches[0]);
      triangleMove();
    }

    function clickmove(e) {
      setCoordinate(e);
      element = e.target;

      triangleMove();
    }

    function reziseWindow() {
      width = window.innerWidth;
      triangleMove();
    }

    document.addEventListener("mousemove", clickmove);
    document.addEventListener("mousedown", clickpush);
    document.addEventListener("mouseup", mouseLeave);
    document.addEventListener("touchmove", touchmove);
    document.addEventListener("touchstart", touchst);
    document.addEventListener("touchend", mouseLeave);
    window.addEventListener("resize", reziseWindow);

    return () => {
      document.removeEventListener("mousemove", clickmove);
      document.removeEventListener("mousedown", clickpush);
      document.removeEventListener("mouseup", mouseLeave);
      document.removeEventListener("touchmove", touchmove);
      document.removeEventListener("touchstart", touchst);
      document.removeEventListener("touchend", mouseLeave);
      window.removeEventListener("resize", reziseWindow);
    };
  }, []);
  return (
    <Header>
      <ContentBox ref={refHeader}>
        <BoxColor>
          <LinePower ref={refLinePower} />
          <Barr>
            <span>Simón Ramírez</span>
          </Barr>
          <CirclePower />
        </BoxColor>
      </ContentBox>
      <Bala ref={refBala} />
    </Header>
  );
};
