import React, { useEffect } from 'react';
import './style.css';

const Dashboard = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.grid-item');
        let h = window.innerHeight;
        let w = window.innerWidth;
    
        const c = items[Math.round(items.length / 2)];
        const cr = c.getBoundingClientRect();
        window.scroll(
          cr.left - w / 2 + cr.width / 2,
          cr.top - h / 2 + cr.height / 2
        );
    
        c.style.background = '#F00';
    
        function onScroll() {
          let pos = null;
          let s = 0;
          let s2 = 0;
    
          for (let i = 0; i < items.length; ++i) {
            pos = items[i].getBoundingClientRect();
    
            s = (pos.top + pos.height / 2 - h / 2) / h;
            s = 1 - Math.abs(s);
            s = s < 0 ? 0 : s > 1 ? 1 : s;
    
            s2 = (pos.left + pos.width / 2 - w / 2) / w;
            s2 = 1 - Math.abs(s2);
            s2 = s2 < 0 ? 0 : s2 > 1 ? 1 : s2;
    
            s = (s + s2) / 2;
    
            items[i].style.transform = `scale(${s})`;
          }
    
          requestAnimationFrame(onScroll);
        }
    
        requestAnimationFrame(onScroll);
      }, []);
    
      return (
        <div className="grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      );
    };

export default Dashboard;
