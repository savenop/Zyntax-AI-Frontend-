// import { useEffect, useRef } from "react";

// export default function CursorTrail() {
//   const trail = useRef([]);
//   const lastMoveTime = useRef(Date.now());

//   useEffect(() => {
//     const canvas = document.createElement("canvas");
//     canvas.style.position = "fixed";
//     canvas.style.top = 0;
//     canvas.style.left = 0;
//     canvas.style.pointerEvents = "none";
//     canvas.style.zIndex = 99999;

//     document.body.appendChild(canvas);

//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     const move = (e) => {
//       lastMoveTime.current = Date.now();

//       trail.current.push({ x: e.clientX, y: e.clientY });

//       // Tail length
//       if (trail.current.length > 25) trail.current.shift();
//     };

//     window.addEventListener("mousemove", move);

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const timeSinceMove = Date.now() - lastMoveTime.current;

//       // Fade based on how long cursor is idle
//       let alpha = 1 - timeSinceMove / 200; // fade in 200ms
//       if (alpha < 0) alpha = 0;

//       if (trail.current.length > 1 && alpha > 0) {
//         ctx.strokeStyle = `rgba(255, 0, 0, ${alpha})`;
//         ctx.lineWidth = 3;
//         ctx.lineJoin = "round";
//         ctx.lineCap = "round";

//         ctx.beginPath();
//         ctx.moveTo(trail.current[0].x, trail.current[0].y);

//         for (let i = 1; i < trail.current.length; i++) {
//           const p = trail.current[i];
//           ctx.lineTo(p.x, p.y);
//         }

//         ctx.stroke();
//       }

//       requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("resize", resize);
//       canvas.remove();
//     };
//   }, []);

//   return null;
// }
