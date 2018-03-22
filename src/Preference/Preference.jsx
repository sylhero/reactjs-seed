import React from 'react';
import ThemePreference from './ThemePreference';
import styles from './Preference.scss';

const Preference = () => {
    return (
        <div className={styles.preference}>
            <section>
                <ThemePreference />
            </section>
        </div>
    );
};

export default Preference;
