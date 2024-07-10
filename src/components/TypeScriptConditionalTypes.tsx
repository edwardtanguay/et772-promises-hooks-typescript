interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	sideLength: number;
}

type ShapeProperties<T> = T extends { kind: "circle" }
	? { radius: number }
	: T extends { kind: "square" }
	? { sideLength: number }
	: never;

type CircleProps = ShapeProperties<Circle>;
type SquareProps = ShapeProperties<Square>;
// type InvalidShapeProps = ShapeProperties<{ kind: "triangle" }>; // is of type never

export const TypeScriptConditionalTypes = () => {
	const circle: CircleProps = {
		radius: 5,
	};

	const square: SquareProps = {
		sideLength: 7,
	};

	return (
		<>
			<p>Circle has a radius of {circle.radius}.</p>
			<p>Square has a side length of {square.sideLength}.</p>
		</>
	);
};


