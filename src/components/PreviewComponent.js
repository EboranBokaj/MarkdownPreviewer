import marked from "marked";

export default function PreviewComponent({ markInp }) {
	const getMarkdownText = () => {
		let rawMarkup = marked(markInp, {
			langPrefix: "hljs language-",
			pedantic: false,
			gfm: true,
			breaks: true,
			sanitize: false,
			smartLists: true,
			smartypants: false,
			xhtml: false
		});
		return { __html: rawMarkup };
	};
	return (
		<div className="box titles">
			<span>Preview:</span>
			<div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
		</div>
	);
}
