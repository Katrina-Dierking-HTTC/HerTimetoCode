import React from 'react'
// import '../design/invite.styles.scss'
import dots from '../../images/dots.png'
import cursive from '../../images/cursive1.png'
import styled from 'styled-components'
import Top from './Top'

function Invite() {

    //created with a mixture of Bulma and JS
    return (
        <>
        <Top />
           <section class="section has-background-light is-paddingless"> 
			<div class="container is-paddingless">

            <div class="section">
                
                <h4 class="subtitle is-2">Welcome to my playground!</h4>
           
                <h4 class="subtitle is-5">Where I practice my skills, try new concepts, and show off the results.</h4>
                <h2 class="subtitle is-3"> Are you ...</h2>
              
            </div>
				
            <div class="columns">

					<div class="column mb-4">
                    <article class="media notification is-info">
							<figure class="media-left">
								<span class="icon is-large">
									<i class="fab fa-2x fa-css3-alt"></i>
								</span>
							</figure>
							<div class="media-content media-left">
								<div class="content">
                                <h1 class="title is-size-4">... A Recruiter or Hiring Manager?</h1>
                                    <p class="is-size-5">
                                        Bulma is a modern CSS framework from @jgthms, based on Flexbox.
                                        Using Bulma, we can describe our website's design using just classes. ᕕ( ᐛ )ᕗ
                                    </p>
								</div>
							</div>
						</article>
					</div>

					<div class="column">
                        <article class="media notification is-primary">
							<figure class="media-left">
								<span class="icon is-large">
									<i class="fab fa-2x fa-css3-alt"></i>
								</span>
							</figure>

                            <div class="media-content">
								<div class="content">
                                    <h1 class="title is-size-4 has-text-left">... An Aspiring or New Web Dev?</h1>
                                    <p class="is-size-5">
                                        Flexbox is a CSS spec that makes sectioning and aligning more natural.
                                        We don't need to know Flexbox but it's how Bulma works behind-the-scenes. ⦤(^ー^)⦥
                                    </p>
						        </div>
					        </div>
                        </article>
                    </div>

                    <div class="column">
                        <article class="media notification is-warning">
							<figure class="media-left">
								<span class="icon is-large">
									<i class="fab fa-2x fa-css3-alt"></i>
								</span>
							</figure>

                            <div class="media-content">
								<div class="content">
                                    <h1 class="title is-size-4 has-text-left">... A Business in Need of a Website?</h1>
                                    <p class="is-size-5">
                                        Flexbox is a CSS spec that makes sectioning and aligning more natural.
                                        We don't need to know Flexbox but it's how Bulma works behind-the-scenes. ⦤(^ー^)⦥
                                    </p>
						        </div>
					        </div>
                        </article>
                    </div>

				</div>
            </div>
            </section>
        </>
    )
}

export default Invite


const Id = styled.div`
    padding: 2vh;
    margin-bottom:1vh;
    text-align:center;

`