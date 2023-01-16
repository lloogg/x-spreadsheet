import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Spreadsheet } from '../index';
const Demo = () => {
  const sheetRef = useRef<Spreadsheet>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let sheet = sheetRef.current;
    sheet = new Spreadsheet(containerRef.current);
  }, []);
  return <div ref={containerRef}>hello</div>;
};
ReactDOM.render(<Demo />, document.getElementById('root'));
