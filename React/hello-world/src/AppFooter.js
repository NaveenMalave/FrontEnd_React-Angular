const AppFooter=(footerProps)=>{ //fuction name must start with capital
    return(
        <div>
            <p>&copy;{footerProps.year} All rights reserved by
                 <a href={footerProps.website}>{footerProps.company}</a> </p>
        </div>
    );
}
export default AppFooter;