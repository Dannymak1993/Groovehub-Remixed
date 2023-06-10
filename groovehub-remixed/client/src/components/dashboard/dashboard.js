import React, { useEffect, useRef } from 'react';
import './style.css';

const Dashboard = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;

        if (wrapper) {
            for (let i = 0; i < 17; i++) {
                const div = document.createElement('div');
                div.classList.add('item');
                const circle = document.createElement('div'); // Create a separate div for the circle
                circle.classList.add('circle');
                div.appendChild(circle); // Append the circle to the div
                wrapper.appendChild(div);
            }
        }

        const animateChildren = (parent, origin) => {
            const children = Array.from(parent.children);
            const childrenWithDistances = [];

            children.forEach(child => {
                const r = child.getBoundingClientRect();
                const childX = r.right - r.width / 2;
                const childY = r.bottom - r.height / 2;
                const distanceY = Math.max(origin.y, childY) - Math.min(origin.y, childY);
                const distanceX = Math.max(origin.x, childX) - Math.min(origin.x, childX);
                const hypot = Math.hypot(distanceX, distanceY);

                child.distance = Math.round(hypot);
                childrenWithDistances.push(child);
            });

            childrenWithDistances.sort(dynamicSort('distance')).reverse();

            childrenWithDistances.forEach((child, index) => {
                const relativeAmt = (index / children.length) * scaleRange;
                child.style.setProperty('--scale', minScale + relativeAmt);
            });
        };

        const dynamicSort = property => {
            let sortOrder = 1;
            if (property[0] === '-') {
                sortOrder = -1;
                property = property.substr(1);
            }

            return function (a, b) {
                let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
                return result * sortOrder;
            };
        };

        const frameRate = 2;
        const minScale = 0.3;
        const maxScale = 1.1;
        const scaleRange = maxScale - minScale;
        let lastFrame;

        const handleMouseMove = e => {
            requestAnimationFrame(function (thisFrame) {
                if (thisFrame - lastFrame > frameRate) {
                    const screenCenter = {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    };
                    const moveX = e.x - screenCenter.x;
                    const moveY = e.y - screenCenter.y;

                    wrapper.style.setProperty('--x', `${moveX / 10}%`);
                    wrapper.style.setProperty('--y', `${moveY / 10}%`);

                    animateChildren(wrapper, e);
                }

                lastFrame = thisFrame;
            });
        };

        const handleScroll = () => {
            const screenCenter = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };

            animateChildren(wrapper, screenCenter);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="dashboard">
            <div className="wrapper" ref={wrapperRef}></div>
        </div>
    );
};

export default Dashboard;
