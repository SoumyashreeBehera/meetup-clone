import { Link } from 'react-router-dom';
import styles from './Category.module.css';

const Category = ({ children, heading, description, type }) => {
	return (
		<div className='content' id="content">
			<div className={styles.category_div}>
				<div className={styles.category_header} >
					<h2>{heading}</h2>
					{description ? <p>{description}</p> : ''}
				</div>
				{children}
				{type ? (
					<Link className={styles.category_button} to='/'>
						See all {type}
					</Link>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Category;
