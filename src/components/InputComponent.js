export default function InputComponent({ markInp, setMarkInp }) {
	const handleChange = (e) => {
		setMarkInp(e.target.value);
	};

	return (
		<form className="box">
			<label className="titles">
				<span>Input markdown:</span>
				<textarea
					id="editor"
					value={markInp}
					onChange={handleChange}></textarea>
			</label>
		</form>
	);
}
