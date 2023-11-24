import s from "./Loader.module.css";

export const Loader = () => (
  <div className={s.loader}>
    <svg
      width="200"
      height="200"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1C10 0.447715 9.55116 -0.00519031 9.00163 0.0499302C6.71915 0.278875 4.57309 1.28771 2.93526 2.92261C1.06041 4.79411 0.00475476 7.33305 1.55656e-05 9.98211C-0.00472362 12.6312 1.04184 15.1739 2.90998 17.0521C4.77812 18.9303 7.31517 19.9905 9.96422 19.9999C12.6133 20.0094 15.1578 18.9674 17.0394 17.1026C18.9209 15.2378 19.9856 12.7027 19.9999 10.0537C20.0141 7.40464 18.9766 4.85821 17.1152 2.97335C15.4891 1.32677 13.3503 0.302602 11.0695 0.0573306C10.5204 -0.0017228 10.0684 0.447959 10.0644 1.00023C10.0605 1.5525 10.5067 1.99697 11.0542 2.06973C12.8041 2.30232 14.4386 3.10931 15.6922 4.37868C17.1813 5.88657 18.0113 7.92371 17.9999 10.0429C17.9885 12.1622 17.1367 14.1903 15.6315 15.6821C14.1263 17.1739 12.0906 18.0075 9.97138 17.9999C7.85214 17.9924 5.8225 17.1442 4.32799 15.6417C2.83347 14.1391 1.99622 12.1049 2.00001 9.98569C2.0038 7.86644 2.84833 5.83528 4.34821 4.33809C5.61083 3.07772 7.25101 2.28246 9.00257 2.06239C9.55054 1.99355 10 1.55228 10 1Z"
        fill="url(#paint)"
      />
      <defs>
        <radialGradient
          id="paint"
          cx=""
          cy="0"
          r="1"
          gradientUnits="objectBoundingBox"
          gradientTransform="scale(5.83333) rotate(-90) translate(10 10)">
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="#512DE4" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);