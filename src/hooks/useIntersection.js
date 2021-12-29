import { useState, useEffect } from 'react';

export const useIntersection = (element, rootMargin) => {
	const [ isVisible, setState ] = useState(false);

	useEffect(
		() => {
			const observer = new IntersectionObserver(
				([ entry ]) => {
						setState(entry.isIntersecting);
				},
				{ rootMargin }
			);

			element.current && observer.observe(element.current);
			const elementToCleanUp = element.current

			return () => observer.unobserve(elementToCleanUp);
		},
		[ element, rootMargin ]
	);

	return isVisible;
};
