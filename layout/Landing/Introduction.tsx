import styles from '@sass/layout/landing/introduction.module.scss';
import Button from 'components/Button';
import Heading from 'components/Heading'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { firebase } from '../../firebase/clientApp';
import 'firebase/storage';

const Introduction = () => {
    const { t } = useTranslation();

    const downloadFile = async () => {
        const storage = firebase.app().storage(process.env.FIREBASE_STORAGE_URL);
        const storageRef = await storage.ref();
        storageRef.child('CVEnglish.pdf').getDownloadURL().then(function (url) {
            const link = document.createElement("a");
            link.download = 'CVEnglish.pdf';
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.click();
        });
    }

    return (
        <section className={styles.introduction}>
            <Image
                className={styles.image}
                src="https://res.cloudinary.com/dlk43rcsj/image/upload/v1654278481/My%20Page/Foto_profesional_cyy1x6.jpg"
                alt='Me'
                height={400}
                width={400} />
            <span>
                <Heading className='mb-sm'>{t("introduction.about_me.tag")}</Heading>
                <p className={styles.description}> {t("introduction.about_me.description")}</p>
                <div className={styles.buttons}>
                    <Button onClick={downloadFile} size='small'>Download resume</Button>
                    <div className={styles.socials}>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/PaulMirve">
                            <svg viewBox="0 0 128 128">
                                <g><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paulmirve/">
                            <svg viewBox="0 0 128 128">
                                <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/paulmirve">
                            <svg viewBox="0 0 128 128">
                                <path d="M125.571 39.926l-58.5-39c-1.997-1.23-4.128-1.24-6.142 0l-58.5 39C.929 40.926 0 42.712 0 44.497v39c0 1.786.929 3.572 2.429 4.571l58.5 39.006c1.996 1.229 4.128 1.24 6.142 0l58.5-39.006c1.5-.999 2.429-2.785 2.429-4.57v-39c0-1.786-.929-3.572-2.429-4.572zm-56.07-24.144l43.07 28.715-19.214 12.858L69.5 41.425V15.784zm-11.001 0v25.644L34.642 57.354 15.428 44.498 58.5 15.782zm-47.5 39l13.786 9.215L11 73.212v-18.43zm47.5 57.43L15.428 83.497 34.642 70.64 58.5 86.569v25.643zM64 76.997l-19.428-13 19.428-13 19.428 13-19.428 13zm5.5 35.215V86.569L93.357 70.64l19.214 12.857-43.07 28.715zm47.5-39l-13.786-9.215L117 54.783v18.429z" ></path>
                            </svg>
                        </a>
                    </div>
                </div>

            </span>
        </section>
    )
}

export default Introduction
