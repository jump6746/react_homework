import classes from '/src/styles/Profile.module.css';

export default function ProfileImage() {
  const defaultClass = '';

  const className = `${classes.Default_Image} ${defaultClass}`;

  return (
    <div className={className}>
      <span className={classes.SrOnly}></span>
    </div>
  );
}
